const express = require('express')
const app = express()

app.use(express.static('public'))

const PORT = process.env.PORT | 8080

app.listen(PORT, ()=> console.log('Server is running on port ${PORT}'))

// app.get('/', function(req, res) {
//     res.send('Hello world')
// })

// const port = process.env.PORT || 3000;
// app.listen(port)
