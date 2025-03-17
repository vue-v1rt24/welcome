-- CreateTable
CREATE TABLE "Realty" (
    "id" TEXT NOT NULL,
    "area" DOUBLE PRECISION,
    "apartments" INTEGER,
    "buildingSeries" TEXT,
    "buildingType" TEXT,
    "buildingName" TEXT,
    "builtYear" INTEGER,
    "category" TEXT,
    "creationDate" TEXT,
    "lastUpdateDate" TEXT,
    "description" TEXT,
    "floor" INTEGER,
    "floorsTotal" INTEGER,
    "windowView" TEXT,
    "parkingType" TEXT,
    "balcony" TEXT,
    "image" JSONB,
    "location" JSONB,
    "lotArea" DOUBLE PRECISION,
    "manuallyAdded" INTEGER,
    "mortgage" INTEGER,
    "payedAdv" INTEGER,
    "utilitiesIncluded" INTEGER,
    "phone" INTEGER,
    "internet" INTEGER,
    "rubbishChute" INTEGER,
    "lift" INTEGER,
    "price" DOUBLE PRECISION,
    "propertyType" TEXT,
    "renovation" TEXT,
    "type" TEXT,
    "dealStatus" TEXT,
    "waterSupply" TEXT,
    "electricitySupply" TEXT,
    "gasSupply" TEXT,
    "heatingSupply" TEXT,
    "lotType" TEXT,
    "kitchenSpace" DOUBLE PRECISION,
    "livingSpace" DOUBLE PRECISION,
    "newFlat" INTEGER,
    "garageType" TEXT,
    "purpose" TEXT,
    "rooms" INTEGER,
    "roomsType" TEXT,
    "ceilingHeight" DOUBLE PRECISION,
    "bathroomUnit" TEXT,
    "videoReview" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Realty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RealtyTwo" (
    "id" TEXT NOT NULL,
    "area" DOUBLE PRECISION,
    "apartments" INTEGER,
    "buildingSeries" TEXT,
    "buildingType" TEXT,
    "buildingName" TEXT,
    "builtYear" INTEGER,
    "category" TEXT,
    "creationDate" TEXT,
    "lastUpdateDate" TEXT,
    "description" TEXT,
    "floor" INTEGER,
    "floorsTotal" INTEGER,
    "windowView" TEXT,
    "parkingType" TEXT,
    "balcony" TEXT,
    "image" JSONB,
    "location" JSONB,
    "lotArea" DOUBLE PRECISION,
    "manuallyAdded" INTEGER,
    "mortgage" INTEGER,
    "payedAdv" INTEGER,
    "utilitiesIncluded" INTEGER,
    "phone" INTEGER,
    "internet" INTEGER,
    "rubbishChute" INTEGER,
    "lift" INTEGER,
    "price" DOUBLE PRECISION,
    "propertyType" TEXT,
    "renovation" TEXT,
    "type" TEXT,
    "dealStatus" TEXT,
    "waterSupply" TEXT,
    "electricitySupply" TEXT,
    "gasSupply" TEXT,
    "heatingSupply" TEXT,
    "lotType" TEXT,
    "kitchenSpace" DOUBLE PRECISION,
    "livingSpace" DOUBLE PRECISION,
    "newFlat" INTEGER,
    "garageType" TEXT,
    "purpose" TEXT,
    "rooms" INTEGER,
    "roomsType" TEXT,
    "ceilingHeight" DOUBLE PRECISION,
    "bathroomUnit" TEXT,
    "videoReview" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RealtyTwo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Realty_category_idx" ON "Realty"("category");

-- CreateIndex
CREATE INDEX "RealtyTwo_category_idx" ON "RealtyTwo"("category");
