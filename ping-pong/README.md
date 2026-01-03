# Instructions

You can create a deployment of this release immediately by using this command. This creates a deployment on your local machine, using version 1.7 of __njugen/log_output__ and version 1.9 of __njugen/pong-app__ images hosted on Docker Hub.

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.9/ping-pong/manifests/deployment.yaml
```

Next up, apply ingress and services

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.9/ping-pong/manifests/service.yaml
```
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.9/ping-pong/manifests/ingress.yaml
```

You may now access the site routed by the ingress at http://localhost:8081 or http://127.0.0.1:8081 if the former does not work. The root leads to the log_output app, while /pingpong leads to the ping-pong app.

## How it works

- Pod deployment: contains 2 containers, one for log_output and one for pong ping-pong-app.
    - each container has internal ports 3000 and 3001 respectively
- Service: The service has 2 ports opened (1234 and 1235), one for each container. These ports
target the ports opened by containers.
- The ingress, defines paths / and /pingpong. Each path routes to one of the service ports, which then targets a container.

So:
- 1 deployment of 2 containers
- 1 service, 2 ports
- 1 ingress