You can create a deployment of this app immediately by using this command. This creates a deployment on your local machine, using the version tag 1.4 of __njugen/todo-app__ image hosted on Docker Hub.

Please note, this does not use the same name as __njugen/todo-app-1.2__ from previous exercises
```
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.4/the_project/manifests/deployment.yaml
```


This release (1.4) prints the following at startup:
``
    Server started in port NNNN
``

This is due to the environmental variable being undefined (it will be defined if exposed in the Dockerfile, but I'll skip it at this point as it isn't part of the task...)

Use this command to watch it:
``
    kubectl logs -f PODNAME
``

