# docker-nginx-node-example
A simple minimal example of nginx and node running together in separated docker container with docker-compose

## Run
```
docker-compose up
```

and browse to ```localhost:4000```

# Load balancing test
Nginx will alternate between web1 and web2 node server, they do not output the same thing so you can easily see it in action
