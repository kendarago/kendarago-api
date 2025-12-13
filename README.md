# Kendarago Backend

A RESTful API for Kendarago, a web-based application designed to facilitate vehicle rentals. Built with Bun, Hono, Prisma, and PostgreSQL.

## ERD Diagram

<!-- ![ERD Diagram](/public/erd.png) -->

## REST API Specification

- Production URL: [https://kendarago-api.onrender.com/](https://kendarago-api.onrender.com/)
- Local URL: [http://localhost:3000](http://localhost:3000)

Rental Company :

| Endpoint                | HTTP  | Description              | Done |
| ----------------------- | ----- | ------------------------ | ---- |
| `/rental-companies`     | `GET` | Get all rental companies |      |
| `/rental-companies/:id` | `GET` | Get rental company by ID |      |

Vehicle :

| Endpoint        | HTTP  | Description       | Done |
| --------------- | ----- | ----------------- | ---- |
| `/vehicles`     | `GET` | Get all vehicles  |      |
| `/vehicles/:id` | `GET` | Get vehicle by ID |      |

## ERD Diagram

<!-- ![ERD Diagram](/public/erd.png) -->

## Getting Started

Copy and edit `.env` file:

```sh
cp .env.example .env
```

Setup database:

```sh
# Run database only
bun db:up
```

Install dependencies:

```sh
bun install
```

Migrate database and generate Prisma Client:

```sh
bun db:migrate
# prisma migrate dev && prisma generate
```

Seed initial products:

```sh
bun db:seed
# prisma db seed
```

Run development server:

```sh
bun dev
# bun run --hot src/index.ts
```

Open <http://localhost:3000>.

## Production

Make sure the `DATABASE_URL` is configured in `.env` file for usage with Docker Compose.

Build the Docker image:

```sh
bun docker:build
# docker compose up -d --build
```

If only run the Docker container:

Migrate database and generate Prisma Client:

```sh
bun db:migrate
# prisma migrate dev && prisma generate
```

Seed initial products:

```sh
bun db:seed
# prisma db seed
```

Run development server:

```sh
bun dev
# bun run --hot src/index.ts
```

Open <http://localhost:3000>.

## Production

Make sure the `DATABASE_URL` is configured in `.env` file for usage with Docker Compose.

Build the Docker image:

```sh
bun docker:build
# docker compose up -d --build
```

If only run the Docker container:

```sh
bun docker:up
# docker compose up -d
bun docker:up
# docker compose up -d
```

Open <http://localhost:3000>.
Open <http://localhost:3000>.
