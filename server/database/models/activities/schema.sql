DROP TABLE IF EXISTS "activities" CASCADE;

CREATE TABLE "activities" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR,
  "difficulty" INTEGER,
  "completion_time" INTEGER,
  "description" TEXT,
  "resource_link" TEXT,
  "resource_created_by" VARCHAR,
  "created_by" INTEGER REFERENCES users(id),
  "created_at" TIMESTAMPTZ,
  "updated_at" TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "activities"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();