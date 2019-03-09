const express = require('express')


const app = express()

app.get('/', (req,res) => {
  res.json('Hey, I am listening! You can edit src/index and see live changes!')
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`app listening on http://localhost:${process.env.PORT}`)
})