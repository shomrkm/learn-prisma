# Description

This is a Node.js based project to learn prisma.

# Requirement

- Docker
- Docker Compose (version: 3)
- Visual Studio Code
  - Dev Containers (extension)

# How to Run

#### 1. Clone this repository and open in VS Code.

#### 2. Open terminal and execute docker-compose up.

```sh
> docker-compose up -d
```

#### 3. Open Container by Dev Container extension.

![open-container-by-devcontainer](./images/open-container-by-devcontainer.png)

#### 4. Update [schema.prisma.ts](./prisma/schema.prisma) as you like.

#### 5. Run prisma migrate

```sh
> npx prisma migrate dev --name init
```

#### 6. Update [scripts.ts](./script.ts) as you like.

#### 7. Run Scrict.

```sh
> npm run devStart
```

# References

- [Prisma Documentation](https://www.prisma.io/)
