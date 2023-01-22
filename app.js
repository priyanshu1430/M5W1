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

app.delete('/api/data/:id', (req, res) => {
    const person = student_data.find((person) => person.id === Number(req.params.id))
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${req.params.id}` })
    }
    const newPeople = student_data.filter(
      (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json({ success: true, data: newPeople })
  })

  app.put('/api/data/:id', (req, res) => {
    var  id = req.params
    var name = req.body.name
    var clas = req.body.class
    var phone_Number = req.body.phone_Number
    var address = req.body.address
  
    const person = student_data.find((person) => person.id === Number(id))
  
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = student_data.map((person) => {
      if (person.id === Number(id)) {
        person.name = name
        person.class = clas
        person.phone_Number = phone_Number
        person.address = address
      }
      return person
    })
    res.status(200).json({ success: true, data: newPeople })
  })


app.listen(5000, ()=>{
    console.log("server running on port 5000")
})