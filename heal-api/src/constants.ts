import ne from "dotenv";
ne.config();
export const __prod__ = process.env.NODE_ENV === "production";
// export const customSecret = process.env.MY_SESSION_SECRET;
export const customSecret =
  "dfbvrttg45gterg43344rGHGYT7Ygyg&&ggyg&&ggygGYGGFF^YYHKH*888HYUHJGGH"; //not in prod
export const COOKIE_NAME = "hid";
export const FRONT_END_ORIGIN = "http://localhost:3000";
export const DB_NAME = "heal_db";
export const DB_USER = "postgres";
export const DB_PASSWORD = "akamimi94@postgres";
export const DB_TYPE = "postgres";
export const FORGET_PASSWORD_PREFIX = "forget_password";
export const SENDER_EMAIL = process.env.MY_SENDER_EMAIL;
export const SENDER_EMAIL_PASSWORD = process.env.MY_SENDER_EMAIL_PASSWORD;
export const EMAIL_SERVER = process.env.MY_SSL_EMAIL_SERVER;

