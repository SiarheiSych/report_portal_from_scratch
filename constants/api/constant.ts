
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


export const apiConst = {
  widgetContent: "DEMO_FILTER_098",
  error:{
   enoughPermission: 'You do not have enough permissions. Access is denied'
  }
}



export const mockBodyForPutRequest  = {
  description: 'string',
  name: 'string',
  share: true,
  updateWidgets: [
    {
      share: true,
      widgetId: 0,
      widgetName: 'LAUNCH STATISTICS AREA',
      widgetOptions: {},
      widgetPosition: {
        positionX: 0,
        positionY: 0
      },
      widgetSize: {
        height: 0,
        width: 0
      },
      widgetType: 'sd'
    }
  ]
};