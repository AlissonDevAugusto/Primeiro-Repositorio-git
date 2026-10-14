// Forma antiga e nova de importa a biblioteca , vai ser a express

//  Antiga : const express = require("express") 

// Nova :
import "dotenv/config"
import express from "express"
import { PrismaClient } from "./generated/prisma/client.js"
import cors from "cors"

const app = express()
const prisma = new PrismaClient()


app.use(express.json())
app.use(cors())

// 1 Buscando um usuario :
app.get("/usuarios", async (req, res) => {
    try {
        const users = await prisma.user.findMany()

        res.status(200).json(users)
    } catch (error) {
        console.error("Erro ao consultar usuários:", error)
        res.status(503).json({
            message: "Não foi possível conectar ao banco de dados. Verifique a conexão com o MongoDB."
        })
    }

})

// 2 Criando um usuario :
app.post("/usuarios", async (req, res) => {

    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json({ message: "Perfil criado com sucesso" })
})

// 3 Editando um usuario :
app.put("/usuarios/:id", async (req, res) => {

    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(200).json({ message: "perfil editado com sucesso" })
})

// 4 Apagamos um usuario :
app.delete("/usuarios/:id", async (req, res) => {

    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: "perfil deletado com sucesso" })
})

/* Parametro 1 = req -> requesiçao
Parametro 2 = res -> reposta */

app.listen(3000)
// http://localhost:3000


