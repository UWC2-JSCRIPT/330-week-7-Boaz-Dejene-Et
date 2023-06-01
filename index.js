const server = require("./server");
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://boaz:5H1pPcW3FuvV59pZ@cluster0.dwyzavx.mongodb.net/test', {}).then(() => {
  server.listen(port, () => {
   console.log(`Server is listening on http://localhost:${port}`);
  });
}).catch((e) => {
  console.error(`Failed to start server:`, e);
});