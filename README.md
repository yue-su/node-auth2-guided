# Node Auth 2 Guided Project

Guided project for **Node Auth 2** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- Optional: PostgreSQL and pgAdmin 4 installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type`npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor adds support for `JSON Web Tokens (JWT)` to the API.

## Server
 - produce a token
 - add needed data to the token
 - send the token as part of the response
 - when a new request comes in to restricted area
    - verify that the token is valid.
    - make the payload (data) available for the rest of the API.

## Client
- store the token
- send the token on following requests.
- destory the token on logout. 