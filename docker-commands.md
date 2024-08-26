# commands

## create docker network

docket network create mong-network

## start mongodb

# start this in git bash for windows

docker run -d \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
--network mogno-network \
--name mongodb \
mongo

## start mongo-express

docker run -d \
-p 8081:8081
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
--net mongo-network \
--name mongo-express \
-e ME_CONFIG_MONGODB_SERVER=mongodb
mongo-express
