import express from 'express';
import { fileURLToPath } from 'url';
import path from "path";
import cors from 'cors';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
 
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
// may help in fixing the error
// app.use(cors({
//   origin: 'http://example.com' // Replace with the allowed origin(s)
// }));

// Enable CORS for the /public route
app.use('/public', cors());
app.use('/setting', cors());
app.use('/sis', cors());

// const localDiskPath = path.parse(require('os').homedir()).root;
const localDiskPath = path.parse(os.homedir()).root;
console.log(localDiskPath)
const directory = path.join(
  localDiskPath,
  'esa-applicants-data',
  'onlineUsers',
);

const directory1 = path.join(
    localDiskPath,
    'esa-applicants-data',
    'esaonlineapp',
  );

  const directorySIS = path.join(
    localDiskPath,
    'sis-application-data',
  );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(directory));

app.use("/setting", express.static(directory1));

app.use("/sis", express.static(directorySIS));

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
