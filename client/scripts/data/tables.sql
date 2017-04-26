CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null,
  "password" varchar(120) not null
);

CREATE TABLE "trips" (
  "id" serial primary key,
  "location" varchar(100) not null,
  "date" date,
  "user_id" varchar(20) not null
);
