import routerMusicas from "./musicasRoutes.js";
import routerAutores from "./autoresRoutes.js";
import express from "express";

const routes = (app) => {

    app.route('/').get((req,res) => {
        res.status(200).send('API MUSICAS')
    })

    app.use(
        express.json(),
        routerMusicas,
        routerAutores
    )

}

export default routes