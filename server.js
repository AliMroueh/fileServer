import express from 'express';
import { fileURLToPath } from 'url';
import path from "path";
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
 
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use("/public", express.static(path.join(__dirname, "../esa-applicants-data/onlineUsers")));

app.get('/', (req, res) =>{
    res.send('Server is ready...');
});
 
let port = 3002;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
    });

// import express from 'express';
// import { fileURLToPath } from 'url';
// import path from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const app = express();

// // Define the secret key
// const secretKey = "hello";

// // Custom middleware to validate the secret key
// const validateSecretKey = (req, res, next) => {
//   const { key } = req.query;

//   if (key !== secretKey) {
//     return res.status(401).send("Unauthorized");
//   }

//   next();
// };

// // Apply the middleware before serving the static files
// app.use("/public", validateSecretKey, express.static(path.join(__dirname, "Users")));

// app.get('/', (req, res) => {
//   res.send('Server is ready...');
// });

// let port = 3002;
// app.listen(port, () => {
//   console.log(`Server at http://localhost:${port}`);
// });

// import express from 'express';
// import { fileURLToPath } from 'url';
// import path from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const app = express();

// // Define the secret key
// const secretKey = "hello";

// // Custom middleware to validate the secret key
// const validateSecretKey = (req, res, next) => {
//   const { authorization } = req.headers;

//   if (authorization !== `Bearer ${secretKey}`) {
//     return res.status(401).send("Unauthorized");
//   }

//   next();
// };

// // Apply the middleware before serving the static files
// app.use("/public", validateSecretKey, express.static(path.join(__dirname, "Users")));

// app.get('/', (req, res) => {
//   res.send('Server is ready...');
// });

// let port = 3002;
// app.listen(port, () => {
//   console.log(`Server at http://localhost:${port}`);
// });
