## Setup first webhook

1. run `git submodule update --init --recursive` to clone the submodules
2. run `docker-compose up --build` to build the docker image and run the container
3. go to http://localhost:8080/ to see the app
4. add a new "trigger", example:
   * <img width="429" alt="image" src="https://github.com/user-attachments/assets/3f5857bb-2104-4afe-aeb8-431059515883">
5. Click on "notifcations" and add a new "delivery channel", example:
   * <img width="439" alt="image" src="https://github.com/user-attachments/assets/126c6595-214a-422b-a3f5-e6084e4eac8e">
6. Add a new "subscription" that uses the delivery channel, example:
   * <img width="451" alt="image" src="https://github.com/user-attachments/assets/93749d21-4923-4b1f-962b-3e64aa680194">
7. Send metrics, via `echo "ping 150 $(date +%s)" | nc localhost 2003`. If the value is above the threshold configured in your trigger, after a short wait, you should see your trigger turn to the alarm state, and you should see the JSON being posted to the webhook endpoint in the docker-compose logs.




