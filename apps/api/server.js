// apps/api/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (_, res) => res.send('Hello from API!'));

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
