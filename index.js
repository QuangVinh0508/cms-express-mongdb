const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000;

const userRouter = require('./routes/users')

app.use(cors());

app.use(express.json({ extended: true }));


app.get('/', (req, res) => {
  res.send('API Running')
})

// router
app.use('/api/users', userRouter)

app.listen(port, () => {
  console.log(`Server Up and running localhost:${port}`)
})