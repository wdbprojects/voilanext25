const { PrismaClient } = require("@prisma/client");
const productsData = require("./productsData.json");

const prisma = new PrismaClient();

async function main() {
  for (const product of productsData) {
    await prisma.product.create({
      data: product,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
