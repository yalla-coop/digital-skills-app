DROP TABLE IF EXISTS "activities_skills" CASCADE;

CREATE TABLE "activities_skills" (
  "id" SERIAL PRIMARY KEY,
  "skill" INTEGER REFERENCES skills(id),
  "user" INTEGER REFERENCES users(id),
  "created_at" TIMESTAMPTZ,
  "updated_at" TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "activities_skills"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();