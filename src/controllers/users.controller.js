import bcrypt from "bcrypt";
import { v4 as tokenGeneretor } from "uuid";
import { db } from "../database/database.connection.js";
/* Games */

export async function signUp(req, res) {
    try {
        res.status(201).send("Esta sera a rota para signIn");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function signIn(req, res) {
    try {
        res.status(201).send("Esta sera a rota para signUp");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function isLogged(req, res) {
    try {
        res.status(201).send("Esta sera a rota verificar se o usuario está logado");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function createFeedback(req, res) {
    try {
        res.status(201).send("Esta rota criará feedbacks");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function updateFeedback(req, res) {
    try {
        res.status(201).send("Esta rota vai alterar feedbacks");
    } catch (err) {
        res.status(500).send(err.message);
    }
}