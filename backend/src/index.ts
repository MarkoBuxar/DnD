#!/usr/bin/env node

import swagger from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
// import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(helmet());
// app.use(cors());

app.use(
  '/docs',
  swagger.serve,
  swagger.setup(YAML.load(path.join(__dirname, './swagger.yaml'))),
);

app.get('/', (req, res) => {
  res.send({});
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
