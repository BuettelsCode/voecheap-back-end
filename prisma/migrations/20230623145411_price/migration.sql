-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "going" TEXT NOT NULL,
    "return" TEXT NOT NULL,
    "packgeId" INTEGER NOT NULL,

    CONSTRAINT "clients_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "packages" (
    "id" SERIAL NOT NULL,
    "destiny" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "support" TEXT NOT NULL,
    "ticket" TEXT NOT NULL,
    "baggage" TEXT NOT NULL,
    "departureTax" TEXT NOT NULL,

    CONSTRAINT "packages_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_fk0" FOREIGN KEY ("packgeId") REFERENCES "packages"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
