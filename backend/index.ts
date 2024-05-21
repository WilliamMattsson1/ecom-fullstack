import cors from 'cors'
import express from 'express'
import * as sqlite from 'sqlite'
import { Database } from 'sqlite'
import sqlite3 from 'sqlite3'
import path from 'path'

let database: Database
;(async () => {
    database = await sqlite.open({
        driver: sqlite3.Database,
        filename: 'shop.sqlite'
    })

    console.log('Connected to the SQLite database')
})()

const app = express()

app.use(cors())
app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('/products', async (_req, res) => {
    let result = await database.all('SELECT * FROM products')
    console.log(result)
    res.json(result)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})
