
const PORT = 8000

const axios = require("axios").default

const cors = require("cors")

 require("dotenv").config()

const express = require("express")

const app = express()


app.use(cors())

app.get('/word',(req,res)=>{

   
    const options = {
      method: 'GET',
      url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
      params: {count: '5', wordLength: '5'},
      headers: {
        'x-rapidapi-host': 'random-words5.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPID_API_KEY
      }
    }
    
    axios.request(options).then(response=> {
        console.log(response.data);
        res.json(response.data[0])
    }).catch( error=> {
        console.error(error)
    })

})

app.listen(PORT,() => console.log('server runing on port : '+PORT))