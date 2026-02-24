import express from 'express'
import ENV from './lib/env.js'

const app = express()

app.get('/api', (req, res) => {
    res.status(200).json({message: 'Hello World'});
})

app.listen(ENV.PORT, () => console.log(`Server is listening on port ${ENV.PORT}`))