# Instructions

You can create a deployment of this release immediately by using this command. This creates a deployment on your local machine, using version 1.11 of __njugen/log_output__ and version 1.11 of __njugen/pong-app__ images hosted on Docker Hub.

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.11/ping-pong/manifests/deployment.yaml
```

Next up, apply ingress, services, pv and pvc

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.11/ping-pong/manifests/service.yaml
```
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.11/ping-pong/manifests/ingress.yaml
```
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.11/ping-pong/manifests/pv.yaml
```
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.11/ping-pong/manifests/pvc.yaml
```

You may now access the site routed by the ingress at http://localhost:8081 or http://127.0.0.1:8081 if the former does not work. The root leads to the log_output app, while /pingpong leads to the ping-pong app.

## How it works

- At first deployment (before any volumes have been mounted):
    - log_output waits for ping-pongs
- /pingpong launches stateless -> no values yet
    - read initial values from file, if such exists
        - app can now increase numbers even if pod was deleted earlier
- log_output and pong-app shares the same volume
    - ping-pong values persists after re-creating the deployment.