const express = require('express')
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hola Mundo')
})

app.listen(3000, ()=> console.log(`Server ready at: http://localhost:3000`))