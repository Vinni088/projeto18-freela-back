CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "phone" INTEGER NOT NULL UNIQUE,
  "city" TEXT NOT NULL,
  "state" VARCHAR(2) NOT NULL
);

CREATE TABLE "services" (
  "id" SERIAL PRIMARY KEY,
  "userId" INTEGER NOT NULL,
  "serviceTitle" TEXT NOT NULL,
  "serviceDescription" TEXT NOT NULL,
  "price" INTEGER NOT NULL,
  "priceDescription" TEXT NOT NULL,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  FOREIGN KEY ("userId") REFERENCES users(id)
);

CREATE TABLE "servicePhotos" (
  "id" SERIAL PRIMARY KEY,
  "serviceId" INTEGER NOT NULL,
  "photoUrl" TEXT NOT NULL,
  FOREIGN KEY ("serviceId") REFERENCES services(id)
);

CREATE TABLE sessions (
  "id" SERIAL PRIMARY KEY,
  "userId" INTEGER NOT NULL,
  "token" TEXT NOT NULL UNIQUE,
  FOREIGN KEY ("userId") REFERENCES users(id)
);

CREATE TABLE "serviceHistory" (
  "id" SERIAL PRIMARY KEY,
  "serviceId" INTEGER NOT NULL,
  "talks" INTEGER NOT NULL DEFAULT 0,
  "sales" INTEGER NOT NULL DEFAULT 0,
  "totalRating" INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY ("serviceId") REFERENCES services(id)
);