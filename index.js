require('dotenv').config()

const server = require('./server')

const PORT = process.env.PORT || 8888

server.listen(PORT, ()=>{
        console.log(`\n*** your lucky numbers are: ${PORT} ***`.bgBlue.black)
})