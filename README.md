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
           MONGO_USER=`docker run --rm mongo:latest id -u mongodb` && \
           MONGO_GROUP=`docker run --rm mongo:latest id -g mongodb` && \
           sudo chown ${MONGO_USER}:${MONGO_GROUP} mongo-home
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

```console
foo@bar:~$ docker run \
           -it \
           --network dc-mongo_nw-mongo \
           --rm \
           mongo:latest \
           mongo \
           mongodb://root:password@dc-mongo/admin \
           --eval "printjson(db.adminCommand('listDatabases'))"
MongoDB shell version v4.4.1
connecting to: mongodb://dc-mongo:27017/admin?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("cf1c4a4a-00cc-4624-9656-832599c1188d") }
MongoDB server version: 4.4.1
{
        "databases" : [
                {
                        "name" : "admin",
                        "sizeOnDisk" : 102400,
                        "empty" : false
                },
                {
                        "name" : "config",
                        "sizeOnDisk" : 12288,
                        "empty" : false
                },
                {
                        "name" : "local",
                        "sizeOnDisk" : 73728,
                        "empty" : false
                }
        ],
        "totalSize" : 188416,
        "ok" : 1
}
```

# Reference

* [mongo - Docker Hub](https://hub.docker.com/_/mongo)
* [Write Scripts for the mongo Shell — MongoDB Manual](https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/)
* [Write Scripts for the MongoDB Shell — MongoDB Shell](https://docs.mongodb.com/mongodb-shell/write-scripts)
