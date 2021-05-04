CREATE DATABASE instagran

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(30) NOT NULL,
    "full_name" TEXT UNIQUE NOT NULL,
    "password" VARCHAR(75) NOT NULL,
    "email" TEXT NOT NULL,
    "profile_pic" TEXT,
    "bio" VARCHAR(255)
);

CREATE TABLE "posts" (
    "id" SERIAL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "description" VARCHAR(2200),
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "comments" (
    "id" SERIAL PRIMARY KEY,
    "comment" VARCHAR(2200) NOT NULL,
    "post_id" INT REFERENCES "posts",
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "likes" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "post_id" INT REFERENCES "posts"
);

CREATE TABLE "follows" (
    "id" SERIAL PRIMARY KEY,
    "follower" INT REFERENCES "user",
    "followee" INT REFERENCES "user"
);