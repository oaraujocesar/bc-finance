import express from 'express';

import FiisController from './app/controllers/FiisController'

const routes = express.Router()

routes.get('/api/v1/fiis', FiisController.index)

export default routes