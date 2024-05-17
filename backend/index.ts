import cors from 'cors'
import express from 'express'
import * as sqlite from 'sqlite'
import { Database } from 'sqlite'
import sqlite3 from 'sqlite3'
import path from 'path' // Gör så att vi kan hämta från vår frontend mapp

let database: Database
;(async () => {
    database = await sqlite.open({
        driver: sqlite3.Database,
        filename: 'db.sqlite'
    })
    await database.run('PRAGMA foreign_keys = ON')

    console.log('Connected to the SQLite database')
})()

const app = express()

app.use(cors())
app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('/api', (_req, res) => {
    res.send({ hello: 'world' })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
