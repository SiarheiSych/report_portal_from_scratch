import Ajv, { ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';
import { RequestMethods } from './enum';

export function ajvValidate(schema: unknown, body: unknown) {
  const ajv = new Ajv({
    strict: false,
    verbose: true,
    allErrors: true
  });
  addFormats(ajv);

  const validate = ajv.compile(schema);
  const isValid = validate(body);
  if (!isValid) {
    const errors = getErrorMessages(validate.errors);
    throw new Error(`Schema validation error: ${JSON.stringify({ validationErrors: errors }, null, 2)}`);
  }
}

function getErrorMessages(errors: ErrorObject[]) {
  const responseErrors = [];

  errors.forEach(err => {
    responseErrors.push({ instancePath: err.instancePath, data: err.data, message: err.message });
  });
  return responseErrors;
}

export function getSchema(schema: unknown, path: string, requestMethod: RequestMethods) {
  return schema['paths'][path][requestMethod]['requestBody']['content']['application/json']['schema'];
}
