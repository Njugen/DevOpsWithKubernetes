You can create a deployment of this app immediately by using this command. This creates a deployment on your local machine, using the version tag 1.5 of __njugen/todo-app__ image hosted on Docker Hub.

The manifest now has a PORT environmental variable defined for the container. Port set to 3000.

```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.5/the_project/manifests/deployment.yaml
```


After deployment, initiate a port forwarding session.

```
    kubectl port-forward PODNAME 3003:3000
```

Go to http://localhost:3003 (or 127.0.0.1:3003 if the former does not work).

You should see:

![alt text](image.png)


