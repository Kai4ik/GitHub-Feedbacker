import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { ObjectSchema } from "yup";
import { ObjectShape } from "yup/lib/object";
import { dynamoDBMapper } from "../../models/dynamoDBConfig";
import { Suggestion } from "../../models/suggestion";
import { schema } from "../../yup-schemas/suggestion";

type Data = {
  success: boolean;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(201).json({ success: true });
};

export function validate(
  schema: ObjectSchema<ObjectShape>,
  handler: NextApiHandler
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      const newSuggestion = new Suggestion();
      try {
        const parsedBody = JSON.parse(req.body);
        newSuggestion.title = parsedBody.title;
        newSuggestion.description = parsedBody.description;
        newSuggestion.category = parsedBody.category;
        newSuggestion.author = parsedBody.createdBy;
        newSuggestion.repo = parsedBody.repo;
        newSuggestion.upvotes = 1;
        newSuggestion.comments = [];
        await schema.validate(newSuggestion, { abortEarly: false });
        await dynamoDBMapper.put({ item: newSuggestion });
      } catch (error) {
        return res.status(400).json(error);
      }
      await handler(req, res);
    }
  };
}

export default validate(schema, handler);
