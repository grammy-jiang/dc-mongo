# Docker Compose for MongoDB

A very simple docker-compose for MongoDB.

This repo is only used on my Raspberry Pi 3 with Ubuntu 18.04 (ARM64).

The root user is configured in `mongo.env`, and if any other user is required,
please use `mongo-initdb.d/createUser.js`.

A user named `user` and its password `password` is created by
`mongo-initdb.d/createUser.js`, the database for this user is named `user_db`.

# Reference

* [mongo - Docker Hub](https://hub.docker.com/_/mongo)
