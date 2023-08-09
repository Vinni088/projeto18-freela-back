CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL UNIQUE,
	"password" text NOT NULL,
	"phone" varchar(11) NOT NULL UNIQUE,
	"city" text NOT NULL,
	"state" text NOT NULL
);


CREATE TABLE "services" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"serviceTitle" text NOT NULL,
	"serviceDescription" text NOT NULL,
	"price" integer NOT NULL,
	"priceDescription" text NOT NULL,
	"isActive" boolean NOT NULL DEFAULT 'true',
);


CREATE TABLE "servicePhotos" (
	"id" serial PRIMARY KEY NOT NULL,
	"serviceId" integer NOT NULL,
	"photoUrl" text NOT NULL,
);


CREATE TABLE "serviceFeedBacks" (
	"id" serial PRIMARY KEY NOT NULL,
	"posterId" integer NOT NULL,
	"receiverId" integer NOT NULL,
	"grade" integer NOT NULL,
	"comments" text NOT NULL,
);


CREATE TABLE "sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"token" text NOT NULL UNIQUE,
);


ALTER TABLE "services" ADD CONSTRAINT "services_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");
ALTER TABLE "servicePhotos" ADD CONSTRAINT "servicePhotos_fk0" FOREIGN KEY ("serviceId") REFERENCES "services"("id");
ALTER TABLE "serviceFeedBacks" ADD CONSTRAINT "serviceFeedBacks_fk0" FOREIGN KEY ("posterId") REFERENCES "users"("id");
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id");

/* Deu problema pq userId não é unique*/
/*ALTER TABLE "serviceFeedBacks" ADD CONSTRAINT "serviceFeedBacks_fk1" FOREIGN KEY ("receiverId") REFERENCES "services"("userId");*/





