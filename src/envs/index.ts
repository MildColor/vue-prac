export type AppEnv = "production" | "development";

export const getAppEnv = (): AppEnv =>
  (process.env.VUE_APP_API_URL as Exclude<AppEnv, "development">) ||
  "development";
