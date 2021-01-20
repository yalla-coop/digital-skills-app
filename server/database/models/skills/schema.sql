DROP TABLE IF EXISTS "skills" CASCADE;

CREATE TABLE "skills" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR NOT NULL,
  "code" VARCHAR NOT NULL,
  "description" TEXT,
  "icon" VARCHAR,
  "tasks" VARCHAR[],
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "skills"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();