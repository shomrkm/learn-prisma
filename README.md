# learn-prisma

Node.js based project to learn prisma.

# Note

TODO: what is "prisma generate"

```sh
npx prisma generate
```

TODO: Diferences between include and select

```TypeScript
const user = await prisma.user.create({
  data: {
    name: 'Shotaro',
    email: 'Shotaro@test.com',
    age: 36,
    isAdmin: true,
    userPreference: {
      create: {
        emailUpdates: true,
      },
    },
  },
  include: {
    userPreference: true,
  },
});
```

```TypeScript
const user = await prisma.user.create({
  data: {
    name: 'Shotaro',
    email: 'Shotaro@test.com',
    age: 36,
    isAdmin: true,
    userPreference: {
      create: {
        emailUpdates: true,
      },
    },
  },
  select: {
    name: true,
    userPreference: { select: { id: true } },
  },
});
```
