declare module '@/redux/store/reducers' {
  export function makeRootReducer(asyncReducers: any): any;
  export function injectReducer(store: any, {}:any): any;
  export function createReducer(initialState: any, ACTION_HANDLES: any): any;
}
