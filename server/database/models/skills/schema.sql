DROP TABLE IF EXISTS "skills" CASCADE;

CREATE TABLE "skills" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR,
  "code" VARCHAR,
  "description" TEXT,
  "image" VARCHAR,
  "tasks" VARCHAR[],
  "created_at" TIMESTAMPTZ,
  "updated_at" TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "skills"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();