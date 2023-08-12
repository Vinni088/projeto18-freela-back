import { db } from "../database/database.connection.js";
/* Jobs */
/* Exhibitions */
export async function showJobs(req, res) {
    try {
        let services = (await db.query(`
        SELECT services.id, services."isActive",
        services.price, services."priceDescription",
        services."serviceTitle", users.name,
        "servicePhotos"."photoUrl" AS "servicePhoto"
        FROM services
        LEFT JOIN "servicePhotos"
        ON "servicePhotos"."serviceId" = services.id
        LEFT JOIN users
        ON users.id = services."userId";
        `)).rows;
        res.status(200).send(services);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function showJobsById(req, res) {
    const { id } = req.params;

    try {
        let services = (await db.query(`SELECT * FROM services WHERE id = $1;`,[id])).rows;
        res.status(200).send(services[0]);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function showMyJobs(req, res) {
    const { id } = res.locals.session;

    try {
        let myServices = (await db.query(`SELECT * FROM services WHERE "userId" = $1;`,[id])).rows;
        res.status(200).send(myServices);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

/* Creation and Modificantion */
export async function createJob(req, res) {
    const { id } = res.locals.session;
    const { serviceTitle, serviceDescription, price, priceDescription, photoUrl, isActive } = req.body

    try {
        let criandoService = await db.query(`
        INSERT INTO services
            ( "serviceTitle", "serviceDescription", "price", "priceDescription", "isActive", "userId")
        VALUES 
            ($1, $2, $3, $4, $5, $6)
        RETURNING id
        `,[serviceTitle, serviceDescription, price, priceDescription, isActive, id]);

        
        let addPhoto = await db.query(`
        INSERT INTO "servicePhotos"
            ("serviceId", "photoUrl")
        VALUES 
            ($1, $2)
        RETURNING id
        `,[criandoService.rows[0].id, photoUrl]);

        res.send(addPhoto)
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

