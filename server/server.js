const express = require('express');
const path = require('path')



const app = express();
const PORT = process.env.PORT || 3333;

//Sharing file static folder in order to have access to static folder 
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../client/build/index.html'))

});

app.listen(PORT, () => console.log('Server started on port %s', PORT));