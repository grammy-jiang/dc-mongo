db = db.getSiblingDB('user_db');

db.createUser({
        user: "user",
        pwd: "password",
        roles: ["readWrite"]
});
