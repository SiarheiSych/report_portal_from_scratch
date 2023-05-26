import { RequestBuilder } from "./request-builder";


export class JsonRequest extends RequestBuilder {
  constructor() {
    super();
    this.setDefaultOptions();
    this.setResponseType('json');
  }
}