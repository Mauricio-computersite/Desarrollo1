const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const passwordSalt = await bcrypt.genSalt(10);
  const adminPassword = await bcrypt.hash("Admin123!", passwordSalt);
  const techPassword = await bcrypt.hash("Tech123!", passwordSalt);

  await prisma.user.upsert({
    where: { email: "admin@local.test" },
    update: {
      role: "ADMIN",
      passwordHash: adminPassword,
      name: "Admin Local",
    },
    create: {
      email: "admin@local.test",
      name: "Admin Local",
      passwordHash: adminPassword,
      role: "ADMIN",
    },
  });

  const techUsers = [
    { email: "tech1@local.test", name: "Tech Local 1" },
    { email: "tech2@local.test", name: "Tech Local 2" },
  ];

  for (const techUser of techUsers) {
    await prisma.user.upsert({
      where: { email: techUser.email },
      update: {
        role: "TECH",
        passwordHash: techPassword,
        name: techUser.name,
      },
      create: {
        email: techUser.email,
        name: techUser.name,
        passwordHash: techPassword,
        role: "TECH",
      },
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
