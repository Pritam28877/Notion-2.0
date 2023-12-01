import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set");
}

export default {
  schema: "./src/lib/supabase/schema.ts",
  out: "./migration",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || "",
  },
} satisfies Config;
