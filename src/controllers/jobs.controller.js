import bcrypt from "bcrypt";
import { v4 as tokenGeneretor } from "uuid";
import { db } from "../database/database.connection.js";
/* Games */

export async function showJobs(req, res) {
    try {
        res.status(201).send("Esta sera exibir todas os trabalhos ofertados");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function showMyJobs(req, res) {
    try {
        res.status(201).send("Esta rota exibirá os trabalhos do usuario");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function createJob(req, res) {
    try {
        res.status(201).send("Esta rota vai criar um trabalho");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function updateJob(req, res) {
    try {
        res.status(201).send("Esta rota vai alterar um trabalho");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function deleteJob(req, res) {
    try {
        res.status(201).send("Esta rota vai deletar um trabalho");
    } catch (err) {
        res.status(500).send(err.message);
    }
}

