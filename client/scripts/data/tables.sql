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

CREATE TABLE "items" (
  "id" serial primary key,
  "name" varchar(100) not null,
  "quantity" integer not null,
  "user_id" integer,
  "trip_id" integer not null
);

CREATE TABLE "user_trip" (
  "user_id" integer not null,
  "trip_id" integer not null
);

SELECT *
  FROM "trips"
LEFT JOIN "user_trip" ON trips.id = user_trip.trip_id
LEFT JOIN "users" ON users.id = user_trip.user_id
WHERE trips.id = 4;

SELECT *
  FROM "users"
WHERE "id" NOT IN (SELECT "user_id"
  FROM "user_trip"
  WHERE "trip_id" = 999);
