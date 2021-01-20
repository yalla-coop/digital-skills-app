DROP TABLE IF EXISTS "users" CASCADE;

CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
  "full_name" VARCHAR NOT NULL,
  "email" VARCHAR NOT NULL,
  "postcode" VARCHAR,
  "role" users_roles NOT NULL,
  "password" VARCHAR NOT NULL,
  "organisation" INTEGER REFERENCES organisations(id),
  "selected_path" learning_paths,
  "deleted" BOOLEAN DEFAULT false,
  "assessment_score" REAL DEFAULT 0,
  "improvement_score" REAL DEFAULT 0,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "users"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();