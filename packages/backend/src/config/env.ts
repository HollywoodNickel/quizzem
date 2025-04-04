import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({
  path: resolve(
    process.cwd(),
    "../..",
    process.env.NODE_ENV === "development" ? ".env.development" : ".env"
  ),
});
