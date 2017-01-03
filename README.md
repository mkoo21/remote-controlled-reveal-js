# Remote controlled presentations with reveal.js

This is the skeleton of a presentation using reveal.js and socket.io, allowing you to use your web browser to give a presentation controlled from any other device (smartphone).

See the demo for reveal.js [here](http://lab.hakim.se/reveal-js/#/) and the github repo [here](https://github.com/hakimel/reveal.js/).

## initialization
Do ```npm install``` then ```npm start```.
You need node/nodemon and npm.

You can see the barebones HTML presentation at ```localhost/8080```, and the controller at ```localhost/8080/controller```. Pushing buttons on a controller open in any window will affect presentations in any other window as long as they are all connected to the same server.
