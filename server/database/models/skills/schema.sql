DROP TABLE IF EXISTS "skills" CASCADE;

DROP TRIGGER IF EXISTS skills_tsvector_update 
  ON skills CASCADE;


CREATE TABLE "skills" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR NOT NULL,
  "code" VARCHAR NOT NULL,
  "description" TEXT,
  "icon" VARCHAR,
  "tasks" VARCHAR[],
  "document" TSVECTOR,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ DEFAULT NOW()
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON "skills"
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();


CREATE OR REPLACE FUNCTION skills_tsvector_trigger() RETURNS trigger AS $$
begin
  new.document :=
    setweight(to_tsvector(COALESCE(new.title, '')), 'A') ||
    setweight(to_tsvector(COALESCE(new.description, '')), 'B');
  return new;
end
$$ LANGUAGE plpgsql;

CREATE INDEX skills_document_idx
  ON skills
  USING GIN (document);

CREATE TRIGGER skills_tsvector_update BEFORE INSERT OR UPDATE
    ON skills FOR EACH ROW EXECUTE PROCEDURE skills_tsvector_trigger();