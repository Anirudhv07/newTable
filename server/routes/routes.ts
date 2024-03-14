import express from 'express'
import controllers from "../controller/controller";

const router=express.Router()

    router.get('/api/getToll',controllers.getAllData)

export default router