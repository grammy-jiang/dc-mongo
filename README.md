# Docker Compose of MongoDB

A very simple docker-compose of MongoDB.

This repo is only used on my Raspberry Pi 3 with Ubuntu 18.04 (ARM64).

The root user is configured in `mongo.env`, and if any other user is required,
please use `mongo-initdb.d/createUser.js`.

A user named `user` and its password `password` is created by
`mongo-initdb.d/createUser.js`, the database for this user is named `user_db`.

# Create user `mongo` home directory

Run the following command to create the user `mongo` home directory, and assign
it to the right user and group:

```sh
mkdir mongo-home && \
sudo chown `docker run --rm mongo:latest id -u mongodb`:`docker run --rm mongo:latest id -g mongodb` mongo-home
```

# Reference

* [mongo - Docker Hub](https://hub.docker.com/_/mongo)
