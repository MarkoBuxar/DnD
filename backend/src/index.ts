#!/usr/bin/env node

import swagger from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

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
