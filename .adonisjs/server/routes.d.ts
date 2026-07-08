import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'registrations.index': { paramsTuple?: []; params?: {} }
    'registrations.create': { paramsTuple?: []; params?: {} }
    'registrations.store': { paramsTuple?: []; params?: {} }
    'registrations.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'registrations.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'registrations.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'registrations.index': { paramsTuple?: []; params?: {} }
    'registrations.create': { paramsTuple?: []; params?: {} }
    'registrations.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'registrations.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'registrations.index': { paramsTuple?: []; params?: {} }
    'registrations.create': { paramsTuple?: []; params?: {} }
    'registrations.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'registrations.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'registrations.store': { paramsTuple?: []; params?: {} }
    'registrations.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}