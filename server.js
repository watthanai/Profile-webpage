
const express = require('express');
const app = express();
const port = process.env.PORT ||8000
const path = require('path');
const { allowedNodeEnvironmentFlags } = require('process');


// app.get('/',(req,res) => {
//     res.sendFile(path.join(__dirname,'Publish','index.html'));
 
// });   


//Set static folder
app.use(express.static(path.join(__dirname,'Publish')))



app.listen(port,()=> console.log('Server is running ' +port)
);