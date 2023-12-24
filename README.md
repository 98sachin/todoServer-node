# todoServer1

* to initiate the node in the editor:
a. install node in the system
b. write the command: node init

* to run the server, write the command : node filename.js
we can also run the server using different command by changing some lines in the package.json file. like removing the "test" in the "script" and adding "start". When we use "start" the command to run the server will be: npm start .
we can also add a "dev" below the "start" and then the command in developers machine using nodemon to auto update the server will be: npm run dev .

HTTP status code: learn about this from developer.mozilla.org

HTTP methods:
    GET: to get all the data from the server
    POST: to send data to server by searching/filling forms etc.
    DELETE: deleting data from server
    PATCH: updating certain things
    PUT: updating multiple datas