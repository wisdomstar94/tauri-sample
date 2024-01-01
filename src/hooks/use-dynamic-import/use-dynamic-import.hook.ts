import { useEffect, useRef, useState } from "react";
import { IUseDynamicImport } from "./use-dynamic-import.interface";

export function useDynamicImport<T>(props: IUseDynamicImport.Props<T>) {
  const {
    importFn,
  } = props;

  const isImporting = useRef(false);
  const [isImported, setIsImported] = useState(false);
  const modules = useRef<T>();

  useEffect(() => {
    if (isImporting.current) return;

    isImporting.current = true;
    importFn()
      .then(x => {
        modules.current = x;
        setIsImported(true);
      })
      .finally(() => {
        isImporting.current = false;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return modules.current;
}