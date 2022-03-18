import AWS from "aws-sdk";
import { DataMapper } from "@aws/dynamodb-data-mapper";

const credentials = new AWS.Credentials({
  accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID,
  secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY,
});

const dynamoDBClient = new AWS.DynamoDB({
  region: "us-east-1",
  credentials: credentials,
});

export const dynamoDBMapper = new DataMapper({ client: dynamoDBClient });
