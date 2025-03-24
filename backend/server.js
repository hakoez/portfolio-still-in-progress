const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../frontend/dist')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
