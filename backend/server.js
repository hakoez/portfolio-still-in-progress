const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const app = express();


const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/meinportfolio.duckdns.org/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/meinportfolio.duckdns.org/fullchain.pem')
};

// Statik React build
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// HTTPS server
https.createServer(options, app).listen(443, () => {
  console.log('HTTPS läuft auf https://meinportfolio.duckdns.org');
});

// HTTP → HTTPS 
http.createServer((req, res) => {
  res.writeHead(301, { Location: 'https://' + req.headers.host + req.url });
  res.end();
}).listen(80);
