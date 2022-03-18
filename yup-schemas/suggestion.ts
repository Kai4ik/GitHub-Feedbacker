import * as yup from "yup";

export let schema = yup.object().shape({
  title: yup.string().required().min(4),
  description: yup.string().required().min(20),
  category: yup.array().of(yup.string()).min(1).ensure(),
  author: yup.string().required().min(1),
  repo: yup.string().ensure(),
  upvotes: yup.number().positive().integer().min(0).required(),
  comments: yup
    .array()
    .of(
      yup.object({
        author: yup.string().required(),
        text: yup.string().required(),
        postedAt: yup.date().required(),
      })
    )
    .ensure(),
});

export type Suggestion = yup.InferType<typeof schema>;
