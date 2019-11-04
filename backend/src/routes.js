const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionControler = require('./controllers/SessionController');
const SpotControler = require('./controllers/SpotController');
const DashboardControler = require('./controllers/DashboardController');
const BookingControler = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionControler.store);

routes.get('/spots', SpotControler.index);
routes.post('/spots', upload.single('thumbnail'), SpotControler.store);
routes.get('/dashboard', DashboardControler.show);
routes.post('/spots/:spot_id/bookings', BookingControler.store);

module.exports = routes;