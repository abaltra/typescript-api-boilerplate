# typescript-api-boilerplate

## What's this?

Basic boilerplate web project. Backend done with NodeJS + Typescript, connected to a MongoDB database, all containerized. Frontend coming soon.

## Why?

Everytime I wanted to start a new project, I ended up googling the same things or butchering some other project just to get started. At least this is a clean starting point.

## How do I run this?

All you need is [Docker](https://www.docker.com). Just build the image
```
docker build -t boilerplate -f Dockerfile .
```

Then run it in dev mode (with livereload)
```
docker run -it -v $(pwd):/app -p 3000:3000 boilerplate
```

Or production mode:
```
docker run -it -p 3000:3000 boilerplate
```

You'll be able to access the API at port 3000.