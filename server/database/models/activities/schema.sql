DROP TABLE IF EXISTS "activities" CASCADE;

CREATE TABLE "activities" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR NOT NULL,
  "difficulty" INTEGER NOT NULL,
  "completion_time" INTEGER NOT NULL,
  "description" TEXT NOT NULL,
  "resource_link" TEXT NOT NULL,
  "resource_created_by" VARCHAR NOT NULL,
  "created_by" INTEGER REFERENCES users(id),
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "activities"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();