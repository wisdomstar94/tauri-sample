"use client"

import { useCallback, useState } from "react";
import { useDynamicImport } from '@/hooks/use-dynamic-import/use-dynamic-import.hook';

export default function Page() {
  const invoke = useDynamicImport({ importFn: () => import('@tauri-apps/api').then(x => x.invoke) });
  const [value, setValue] = useState('');
  const [age, setAge] = useState<number>();
  const [greeting, setGreeting] = useState('');

  const onClick = useCallback(() => {
    if (invoke === undefined) return;
    invoke<string>('greet', { age, name: value, })
      .then(result => setGreeting(result))
      .catch(console.error);
  }, [age, invoke, value]);

  return (
    <>
      <div className="w-full flex flex-wrap gap-2 relative">
        <div className="w-full flex flex-wrap gap-2 items-center justify-start relative">
          <div className="text-sm">
            value : 
          </div>
          <input className="border border-black px-2 py-0.5 text-sm text-black" type="text" value={value} onChange={e => setValue(e.target.value)} />
        </div>
        <div className="w-full flex flex-wrap gap-2 items-center justify-start relative">
          <div className="text-sm">
            age : 
          </div>
          <input className="border border-black px-2 py-0.5 text-sm text-black" type="number" value={age} onChange={e => setAge(Number(e.target.value))} />
        </div>
      </div>
      <div className="w-full block relative">
        <button 
          className="inline-flex px-2 py-0.5 text-sm text-black border border-black rounded-sm cursor-pointer hover:bg-gray-100"
          onClick={onClick}
          >
          위 value 를 tauri 에게 보내기
        </button>
      </div>
      <div className="w-full block relative">
        tauri 에게 받은 데이터 : {greeting}
      </div>
    </>
  );
}