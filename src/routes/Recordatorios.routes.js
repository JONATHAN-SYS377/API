import { Router } from 'express';

import { getRecordatorios, createNewrecordatorio,updateRecordatorio,deleteRecordatorio } from '../controllers/Recordatorios.controller';

const router = Router();

router.get('/Recordatorio', getRecordatorios)

router.post("/Recordatorio", createNewrecordatorio);

router.put('/Recordatorio/:ID', updateRecordatorio)

router.delete('/Recordatorio/:ID',deleteRecordatorio)


export default router