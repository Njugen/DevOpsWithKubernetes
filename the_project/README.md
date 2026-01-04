# Instructions

You can create a deployment of this app immediately by using this command. This creates a deployment on your local machine.

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.12/the_project/manifests/deployment.yaml
```

Next up, apply ingress, services, pv and pvc

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.12/the_project/manifests/service.yaml
```
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.12/the_project/manifests/ingress.yaml
```
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.12/the_project/manifests/pv.yaml
```
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.12/the_project/manifests/pvc.yaml
```
You may now access the site routed by the ingress at http://localhost:8081 or http://127.0.0.1:8081 if the former does not work

## How it works

This solution creates a backend and a frontend for the todo-app. The frontend runs React/Vite, while the backend acts as a regular server. These two components are placed in separate docker images, so the pod runs these two containers.

__The ingress:__
- /storage
    - This path is meant to lead to the file storage. For simplicity sake, at the moment it only leads to a static file (random-image.jpg).
- /
    - This is the root, where the frontend react app runs

__The server/backend app:__
- At startup:
  - If there is no random-image.jpg in the PV, then it fetches it
        - All fetched files from https://picsum.photos/1200 are saved as random-image.jpg in PV
  - If there is a random-image.jpg file in the PV, then it doesn't fetch it
  - The server fetches a new image peridocally every 10 minutes regardless

__The frontend:__
- Shows the random-image.jpg (located at /storage/random-image.jpg)