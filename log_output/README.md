# Instructions

You can create a deployment of this app immediately by using this command. This creates a deployment on your local machine, using version 1.10 of __njugen/log_output__ image hosted on Docker Hub.

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.10/log_output/manifests/deployment.yaml
```

Next up, apply ingress and services

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.10/log_output/manifests/service.yaml
```
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.10/log_output/manifests/ingress.yaml
```

You may now access the site routed by the ingress at http://localhost:8081 , http://127.0.0.1:8081 if the former does not work

## How it works

This one is a quick, lazy, and ugly solution:
- The container image (log_output) acts as a server, if its container's port is 3000.
    - In this case, it reads contents from a text file located in the volume.
    - If the container's port is 3001, then it just writes to a file every 5 seconds

- So, only the file-reading container is exposed through the service. The other isn't accessible, and is totally independent.
- Summary:
    - There are two containers in one pod.
    - The ingress routes to the service
    - The service exposes only the reading component