export declare namespace IUseDynamicImport {
  export interface Info<T> {
    isImported: boolean;
    module: T | undefined;
  }

  export interface Props<T> {
    importFn: () => Promise<T>
  }
}