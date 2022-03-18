import type { NextApiRequest, NextApiResponse } from "next";
import { dynamoDBMapper } from "../../models/dynamoDBConfig";
import { Suggestion } from "../../models/suggestion";

type Data = {
  data: Suggestion[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Suggestions: Suggestion[] = [];
  for await (const item of dynamoDBMapper.scan(Suggestion))
    Suggestions.push(item);
  res.status(200).json({ data: Suggestions });
}
