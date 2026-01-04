# Instructions

You can create a deployment of this app immediately by using this command. This creates a deployment on your local machine.

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.13/the_project/manifests/deployment.yaml
```

Next up, apply ingress, services, pv and pvc

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.13/the_project/manifests/service.yaml
```
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.13/the_project/manifests/ingress.yaml
```
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.13/the_project/manifests/pv.yaml
```
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.13/the_project/manifests/pvc.yaml
```
You may now access the site routed by the ingress at http://localhost:8081 or http://127.0.0.1:8081 if the former does not work

## How it works

This builds on top of 1.12. Here, a form with text field and submit button has been added. Also a list
- The form has no submission feature (doesn't do http requests)
- The to-do list is a mock list. Updates only through react state and resets at reload as of now.