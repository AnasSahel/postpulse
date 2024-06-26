declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    DATABASE_URL: string;

    APP_COMPANY_NAME: string;
  }
}
