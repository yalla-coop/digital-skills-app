DROP TABLE IF EXISTS "users_skill_areas" CASCADE;

CREATE TABLE "users_skill_areas" (
  "id" SERIAL PRIMARY KEY,
  "user" INTEGER REFERENCES users(id),
  "skill_area" INTEGER REFERENCES skill_areas(id),
  "created_at" TIMESTAMPTZ,
  "updated_at" TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "users_skill_areas"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();