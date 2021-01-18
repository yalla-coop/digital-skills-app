DROP TABLE IF EXISTS "users_checks_ins" CASCADE;

CREATE TABLE "users_checks_ins" (
  "id" SERIAL PRIMARY KEY,
  "user" INTEGER REFERENCES users(id),
  "used_skills" INTEGER[], -- ids of skills
  "created_at" TIMESTAMPTZ,
  "updated_at" TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "users_checks_ins"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();