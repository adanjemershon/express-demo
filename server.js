import express from 'express'
import {fileURLToPath} from 'url'
import path from 'node:path'
import names from './routes/names.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/names', names)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
