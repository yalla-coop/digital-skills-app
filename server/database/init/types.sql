
DROP TYPE IF EXISTS users_roles CASCADE;
DROP TYPE IF EXISTS learning_paths CASCADE;
DROP TYPE IF EXISTS skills_statuses CASCADE;

CREATE TYPE "users_roles" AS ENUM (
  'volunteer',
  'hq'
);

CREATE TYPE "learning_paths" AS ENUM (
  'basic',
  'improve'
);

CREATE TYPE "skills_statuses" AS ENUM (
  'already_has',
  'completed',
  'queued'
);