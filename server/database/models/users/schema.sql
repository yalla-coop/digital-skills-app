DROP TABLE IF EXISTS "users" CASCADE;

CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
  "full_name" VARCHAR,
  "email" VARCHAR,
  "postcode" VARCHAR,
  "role" users_roles,
  "password" VARCHAR,
  "organisation" INTEGER,
  "selected_path" learning_paths,
  "deleted" BOOLEAN DEFAULT false,
  "assessment_score" INTEGER, -- 35.11% => stores as 3511
  "improvement_score" INTEGER, -- same as above
  "created_at" TIMESTAMPTZ,
  "updated_at" TIMESTAMPTZ
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "users"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();