# Instructions

This app has been pushed to Docker Hub, you may use it in your local cluster through this command:
``
    kubectl create deployment thai-logout-app --image=njugen/log_output
``

The app generates a random message at start up, and prints it out in the console/cmd every 5 seconds. Use this command to watch it:
``
    kubectl logs -f PODNAME
``