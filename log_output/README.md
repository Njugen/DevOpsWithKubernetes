# Instructions

You can create a deployment of this app immediately by using this command. This creates a deployment on your local machine, using the latest revision of __njugen/log_output__ image hosted on Docker Hub.
``
    kubectl apply -f https://raw.githubusercontent.com/Njugen/DevOpsWithKubernetes/refs/heads/1.3/log_output/manifests/deployment.yaml
``

The app generates a random message at start up, and prints it out in the console/cmd every 5 seconds. Use this command to watch it:
``
    kubectl logs -f PODNAME
``