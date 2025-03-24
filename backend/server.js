const express = require('express');
const path = require('path');
const app = express();

// React build klasörünü serve et
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Diğer tüm isteklerde index.html döndür (SPA routing için)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Sunucu 8080 portunda çalışacak
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
