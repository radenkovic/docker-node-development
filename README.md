# Docker for node development sample

This is configured sample with `Docker`, `docker-compose` and `nodemon` for live reloading of the server,
so you don't need node installation locally at all. Uses small `node10-alpine` image.

# Usage

- Install Docker and `docker-compose`
- `docker-compose up`
- Edit file in `src` folder
- Magic!
- Open http://localhost:8080 in your browser

# Adding dependencies

After adding dependency (`yarn add` or `npm install`), you need to rebuild the image using `docker-compose build`. 
If you don't want to rebuild images all the time, you can add volume in `docker-compose.yml`

```
services:
  web_development:
  // other stuff
  volumes:
    - ./node_modules:/usr/app/node_modules
```