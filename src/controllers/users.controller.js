import bcrypt from "bcrypt";
import { v4 as tokenGeneretor } from "uuid";
import { db } from "../database/database.connection.js";
/* Games */

export async function signUp(req, res) {
    const { name, email, password, phone, city, state } = req.body

    const hash = bcrypt.hashSync(password, 10);

    try {
        if (isNaN(phone)) return res.status(404).send(" Por favor insira um numero de telefone válido");

        let usuarioPreExistente = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
        if (usuarioPreExistente.rows.length > 0) return res.status(409).send(" Esse email já está cadastrado ");

        let criarUser = await db.query(`
        INSERT INTO users 
          (name, email, password, phone, city, state)
        VALUES 
          ($1, $2, $3, $4, $5, $6);
        `, [name, email, hash, phone, city, state]);

        res.status(201).send(" Cadastro Efetuado. ");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;
    const token = tokenGeneretor();


    try {
        let usuario = (await db.query(`
            SELECT users.id, users.name, users.email, users.password, sessions.token
            FROM users
            LEFT JOIN sessions ON users.id = sessions."userId"
            WHERE users.email = $1;
        `, [email])).rows[0];

        const senhaEstaCorreta = bcrypt.compareSync(password, usuario.password);
        if (!senhaEstaCorreta) { return res.status(401).send(" A senha enviada não está correta. ") };

        if (!usuario) {
            return res.status(401).send(" O email enviado não está cadastrado. ")
        }

        if (usuario.token === null) {
            await db.query(`
            INSERT INTO sessions 
                ("userId", token)
            VALUES 
                ($1, $2)
            `,[usuario.id, token])
            return res.send(token)
        }

        res.send(usuario.token);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function isLogged(req, res) {
    const { token } = req.body;

    try {
        let usuario = (await db.query(`
        SELECT users.id, users.name, users.email, sessions.token
        FROM sessions
        LEFT JOIN users ON users.id = sessions."userId"
        WHERE sessions.token = $1;
        `, [token])).rows[0];

        if (!usuario) {
            return res.status(401).send(" O token enviado é invalido ou nulo. ")
        }

        res.send(usuario);
    } catch (err) {
        res.status(500).send(err.message);
    }
}
