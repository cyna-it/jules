import { defineConfig } from "kysely-ctl"
import { db } from "./src/db"

export default defineConfig({
  kysely: db,
  migrations: {
    migrationFolder: "./migrations",
  },
  seed: {
    seedFolder: "./seeds",
  },
})
