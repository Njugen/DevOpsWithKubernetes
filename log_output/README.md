# Instructions

You can create a deployment of this app immediately by using this command. This creates a deployment on your local machine, using version 1.7 of __njugen/log_output__ image hosted on Docker Hub.

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.7/log_output/manifests/deployment.yaml
```

Next up, apply ingress and services

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.7/log_output/manifests/service.yaml
```
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.7/log_output/manifests/ingress.yaml
```

You may now access the site routed by the ingress at http://localhost:8081,or http://127.0.0.1:8081 if the former does not work