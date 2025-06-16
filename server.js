const http = require('http');
// const app = require("./app");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://akhrorbek0704:CeMH9I2qGaNClP7b@cluster0.id9lfvi.mongodb.net/Reja"

mongodb.connect(
    connectionString, 
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    },
     (err, client) =>{ if(err) console.log("Error on connection MongoDB");
        else {
            console.log("successfull");
            module.exports = client;
            const app = require("./app");

            const server = http.createServer(app);
            let PORT = 3010;
            server.listen(PORT, function () {
                console.log(`The sever is running successfully on port: ${PORT}, http://localhost:${PORT}`
               );
            });

        }

    });


