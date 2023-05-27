import { AxiosResponse } from "axios";
import { ErrorResponse } from "../../../../constants";
import { getLogger } from "../../../utils";

const logger = getLogger('[Request Helper]');

export async function errorHandler(responsePromise: Promise<AxiosResponse>): Promise<ErrorResponse> {
    let response: AxiosResponse;
    try {
      response = await responsePromise;
    } catch (error) {
      logger.error(`Error received ${error.response.status}`);
      if (typeof error.response.data === 'string' || Buffer.isBuffer(error.response.data)) return error.response;
      return error.response;
    }
    throw `Expected request error, but got status code ${response.status}!`;
  }