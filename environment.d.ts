declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DYNAMODB_ACCESS_KEY_ID: string;
      GITHUB_ACCESS_TOKEN: string;
      DYNAMODB_SECRET_ACCESS_KEY: string;
    }
  }
}

export {};
