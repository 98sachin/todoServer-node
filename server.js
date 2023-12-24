const http = require("http");
const port = 8081;

const toDOList = ["hey! everyone","hope you all","are doing","awesome at work."];

// creating a server
http.createServer((req,res)=>{
    // callback functions below line
   const {method,url} = req;  // GET is the default method that we will get.    
//    console.log(method,url);
// working on routing below
if(url==="/todos"){
        if(method==="GET"){
                // if(method==="POST")  // this will not run in the browser, it will only run in thunderclient or postman application.
        console.log("todos route and its a get method")
        // res.writeHead(200);  // for simple text
        res.writeHead(200,{"Content-Type":"text/html"}) // for getting html text
        // res.writeHead(404,{"Content-Type":"text/html"}) // try these as well
        res.write(toDOList.toString()) // converting the array to string
        }else if(method==="POST"){
            let body = "";  // tcp or udp . we use chunks of data to transfer body information to the server
            req.on('error',(err)=>{  // callback function. we used 'on' which means 'on this request'.
                console.log()
            }).on('data',(chunk)=>{  // if there is no error, then pass the data as chunk i.e., in bits and pieces
                body += chunk
                console.log("chunk: ", chunk); // to see how the chunk is working
            }).on('end',()=>{  // to end the request we will parse back the data to json format
                body = JSON.parse(body);
                console.log("data: ", body);
                let newToDo = toDOList;
                newToDo.push(body.item) // you can write anything apart from item 
            })
        }else if(method==="PUT"){

        }else if(method==="DELETE"){
            // before deleting a data we need to retain it just for a backup purpose.
            let body = "";
            req.on('error',(err)=>{
                console.log(err);
            }).on('data',(chunk)=>{
                body += chunk;
            }).on('end',()=>{
                body = JSON.parse(body);
                let deleteThis = body.item; // you can write anything apart from item 
            // now lets crosscheck what we want to delete
                // for(let i=0; i<toDOList.length; i++){
                //     if(toDOList[i]===deleteThis){
                //         toDOList.splice(i,1);
                //         break;
                //     }
                // }

                // OR

                toDOList.find((elem, index)=>{
                    toDOList.splice(index,1);
                })
            })
        }else{
            res.writeHead(404);
        }
}else if(url==="/"){
    console.log("home default route")
}
   res.end();
})
.listen(port,()=>{
    console.log(`Node Server Started Running on Port ${port}`);
});