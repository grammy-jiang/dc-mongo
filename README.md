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

```console
foo@bar:~$ mkdir mongo-home && \
sudo chown `docker run --rm mongo:latest id -u mongodb`:`docker run --rm mongo:latest id -g mongodb` mongo-home
```

```console
foo@bar:~$ docker run -it --rm mongo:latest mongo --version
MongoDB shell version v4.4.1
Build Info: {
    "version": "4.4.1",
    "gitVersion": "ad91a93a5a31e175f5cbf8c69561e788bbc55ce1",
    "openSSLVersion": "OpenSSL 1.1.1  11 Sep 2018",
    "modules": [],
    "allocator": "tcmalloc",
    "environment": {
        "distmod": "ubuntu1804",
        "distarch": "aarch64",
        "target_arch": "aarch64"
    }
}
```

# Reference

* [mongo - Docker Hub](https://hub.docker.com/_/mongo)
* [Write Scripts for the mongo Shell — MongoDB Manual](https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/)
* [Write Scripts for the MongoDB Shell — MongoDB Shell](https://docs.mongodb.com/mongodb-shell/write-scripts)
