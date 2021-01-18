DROP TABLE IF EXISTS "users_skills" CASCADE;

CREATE TABLE "users_skills" (
  "id" SERIAL PRIMARY KEY,
  "user" INTEGER REFERENCES users(id),
  "skill" INTEGER REFERENCES skills(id),
  "status" skills_statuses,
  "added_score" INTEGER, -- 12.77% => 1277
  "created_at" TIMESTAMPTZ,
  "updated_at" TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "users_skills"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();