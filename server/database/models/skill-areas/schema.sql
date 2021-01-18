DROP TABLE IF EXISTS "skill_areas" CASCADE;

CREATE TABLE "skill_areas" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR,
  "code" VARCHAR,
  "icon" VARCHAR,
  "created_at" TIMESTAMPTZ,
  "updated_at" TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "skill_areas"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();