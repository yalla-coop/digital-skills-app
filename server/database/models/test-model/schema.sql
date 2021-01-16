DROP TABLE IF EXISTS "users" CASCADE;

CREATE TABLE "users" (
	"id" serial PRIMARY KEY,
	"role" users_roles NOT NULL,
	"supervisor_id" INTEGER REFERENCES users(id),
	"credential_id" INTEGER REFERENCES credentials(id) ON DELETE SET NULL,
	"status" user_statuses NOT NULL DEFAULT 'activated',
  "created_at" timestamp NOT NULL DEFAULT NOW(),
  "updated_at" timestamp NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "users"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();