DROP TABLE IF EXISTS "skill_areas" CASCADE;

CREATE TABLE "skill_areas" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR NOT NULL,
  "code" VARCHAR,
  "icon" VARCHAR,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "skill_areas"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();