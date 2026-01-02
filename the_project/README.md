# Instructions

You can create a deployment of this app immediately by using this command. This creates a deployment on your local machine, using version 1.8 of __njugen/todo-app__ image hosted on Docker Hub.

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.8/the_project/manifests/deployment.yaml
```

Next up, apply ingress and services

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.8/the_project/manifests/service.yaml
```
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.8/the_project/manifests/ingress.yaml
```

You may now access the site routed by the ingress at http://localhost:8081,or http://127.0.0.1:8081 if the former does not work