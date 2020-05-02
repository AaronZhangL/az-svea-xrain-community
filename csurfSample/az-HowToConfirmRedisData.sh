# Default redis db is 0
$ docker exec -it [CONTAINER ID] /bin/bash
root@46f68f517bf1:/data# redis-cli -n 0
127.0.0.1:6379> keys *
