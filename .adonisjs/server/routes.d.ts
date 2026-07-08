import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'registrations.index': { paramsTuple?: []; params?: {} }
    'registrations.create': { paramsTuple?: []; params?: {} }
    'registrations.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'registrations.index': { paramsTuple?: []; params?: {} }
    'registrations.create': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'registrations.index': { paramsTuple?: []; params?: {} }
    'registrations.create': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'registrations.store': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}