import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';

import pairRouter from './pair.js';
import qrRouter from './qr.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;

// Increase max listeners to avoid warnings for multiple event listeners
import('events').then(events => {
    events.EventEmitter.defaultMaxListeners = 500;
});

// Middleware for JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static public files -- modify if you want to limit to /public folder
app.use(express.static(__dirname));

// Send the main HTML on root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pair.html'));
});

// Attach main routers
app.use('/pair', pairRouter);
app.use('/qr', qrRouter);

// 404 handler for unhandled routes
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
});

// Main error handler
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Ready to deploy on Render!`);
});