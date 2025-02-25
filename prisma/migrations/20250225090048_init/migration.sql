-- CreateTable
CREATE TABLE "Realty" (
    "id" TEXT NOT NULL,
    "area" DOUBLE PRECISION,
    "balcony" TEXT,
    "category" TEXT,
    "description" TEXT,
    "image" JSONB,
    "internet" INTEGER DEFAULT 0,
    "lift" INTEGER DEFAULT 0,
    "livingSpace" DOUBLE PRECISION,
    "location" JSONB,
    "phone" INTEGER DEFAULT 0,
    "price" DOUBLE PRECISION,
    "type" TEXT,
    "url" TEXT,
    "videoReview" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Realty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RealtyTwo" (
    "id" TEXT NOT NULL,
    "area" DOUBLE PRECISION,
    "balcony" TEXT,
    "category" TEXT,
    "description" TEXT,
    "image" JSONB,
    "internet" INTEGER DEFAULT 0,
    "lift" INTEGER DEFAULT 0,
    "livingSpace" DOUBLE PRECISION,
    "location" JSONB,
    "phone" INTEGER DEFAULT 0,
    "price" DOUBLE PRECISION,
    "type" TEXT,
    "url" TEXT,
    "videoReview" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RealtyTwo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Realty_category_balcony_type_idx" ON "Realty"("category", "balcony", "type");

-- CreateIndex
CREATE INDEX "RealtyTwo_category_balcony_type_idx" ON "RealtyTwo"("category", "balcony", "type");
