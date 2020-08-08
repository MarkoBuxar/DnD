#!/usr/bin/env node

import swagger from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { connector } from 'swagger-routes-express';
import { OpenApiValidator } from 'express-openapi-validator';
import cors from 'cors';
import routes from './Api/routes';

(async () => {
  dotenv.config();

  const port = process.env.PORT;
  const apiDefinition = YAML.load(path.join(__dirname, './swagger.yaml'));
  const app = express();
  const connect = connector(routes, apiDefinition);

  app.use(helmet());
  app.use(cors());

  app.use('/docs', swagger.serve, swagger.setup(apiDefinition));

  app.get('/', (req, res) => {
    res.send({});
  });

  await new OpenApiValidator({
    apiSpec: apiDefinition,
    validateRequests: true,
    validateResponses: true,
  }).install(app);

  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
  });

  connect(app);

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
})().catch((err) => {
  console.error(err);
});
