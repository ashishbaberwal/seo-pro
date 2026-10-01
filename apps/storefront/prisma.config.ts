import { defineConfig } from "prisma/config";

export default defineConfig({
   schema: "prisma/schema.prisma",
   datasource: {
      // Client generation only needs a well-formed URL string, not a live
      // database — so CI/Docker builds work without DATABASE_URL set.
      // Any real database command still requires the genuine variable.
      url: process.env.DATABASE_URL ?? "postgresql://postgres:postgres@localhost:5432/postgres",
   },
});
