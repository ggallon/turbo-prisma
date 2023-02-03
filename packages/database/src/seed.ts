import prisma, { type User } from ".";

const DEFAULT_USERS = [
  { name: "Tim Apple", email: "tim@apple.com" },
  { name: "Gwen Banana", email: "gwenael@banana.com" },
] as Array<User>;

const load = async () => {
  console.log(`Start seeding...`);

  await prisma.user.deleteMany();
  console.log("Deleted records in User table");

  await prisma.user.createMany({
    data: DEFAULT_USERS,
  });
  console.log("Added users data");
};

load()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log(`Seeding finished.`);
  });
