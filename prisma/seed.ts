import prisma from "./db";
import sampleData from "@/db/sample-data";

async function main() {
  console.log("Start Seeding ...");

  await prisma.product.deleteMany();
  await prisma.user.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.verificationToken.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });
  await prisma.user.createMany({ data: sampleData.users });
  console.log("Database Seeded Suceesfully ...");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
