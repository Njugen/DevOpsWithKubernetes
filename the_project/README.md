# Instructions

This release (1.2) has been pushed to Docker Hub, you may use it in your local cluster through this command:
``
    kubectl create deployment thai-logout-app --image=njugen/njugen/todo-app-1.2
``

This release (1.2) prints the following at startup:
``
    Server started in port NNNN
``

This is due to the environmental variable being undefined (it will be defined if exposed in the Dockerfile, but I'll skip it at this point as it isn't part of the task...)


Use this command to watch it:
``
    kubectl logs -f PODNAME
``

