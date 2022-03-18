import { attribute } from "@aws/dynamodb-data-mapper-annotations";

export class Comment {
  @attribute()
  author!: string;

  @attribute()
  text!: string;

  @attribute()
  postedAt!: Date;
}
