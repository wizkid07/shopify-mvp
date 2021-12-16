-- CreateTable
CREATE TABLE "Merchant" (
    "id" TEXT NOT NULL,
    "merchant_domain" TEXT NOT NULL,
    "merchant_appid" SERIAL NOT NULL,
    "access_token_key" TEXT NOT NULL,
    "access_token_secret" TEXT NOT NULL,
    "platform" TEXT NOT NULL,

    CONSTRAINT "Merchant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Merchant_merchant_appid_key" ON "Merchant"("merchant_appid");
