const express = require('express');

let {student_data} = require('./data');

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())




app.get('/api/data',(req,res)=>{
    res.status(200).json({ success: true, data: student_data })
})

app.post('/data',(req,res)=>{
   var name = req.body.name
   var clas = req.body.class
   var phone_Number = req.body.phone_Number
   var address = req.body.address
   if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
    student_data.push({
        id:(contact.length + 1 ).toString(),
        name:name,
        class:clas,
        phone_Number: phone_Number,
        address: address,
    })
    res.status(201).json({ success: true,date : student_data})

})

app.listen(5000, ()=>{
    console.log("server running on port 5000")
})