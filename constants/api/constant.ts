
export const requestConstants = {
  statusCodes: {
    success: 200,
    created: 201,
    accepted: 202,
    noContent: 204,
    movedPermanently: 301,
    found: 302,
    notModified: 304,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    methodNotAllowed: 405,
    conflict: 409,
    internalServerError: 500
  },
  defaultTimeout: 40000,
  authorization: {
    bearer: 'Bearer'
  }
};
