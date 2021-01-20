DROP TABLE IF EXISTS "volunteers_organisations" CASCADE;

CREATE TABLE "volunteers_organisations" (
  "id" SERIAL PRIMARY KEY,
  "organisation" INTEGER REFERENCES organisations(id) NOT NULL,
  "volunteer" INTEGER REFERENCES users(id) NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "volunteers_organisations"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();