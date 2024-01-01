"use client"

import { getVersion } from "@tauri-apps/api/app";
import Link from "next/link";
import { useEffect, useState } from "react";


export function RootLayoutClient() {
  const [version, setVersion] = useState('');

  const [menus, setMenus] = useState([
    { name: '/greet', href: '/greet' },
  ]);

  useEffect(() => {
    getVersion().then(result => setVersion(result));
  }, []);

  return (
    <>
      <div className="w-full p-4 bg-slate-300 flex flex-wrap relative gap-2">
        <div className="w-full flex flex-wrap gap-2 relative">
          현재 버전 : { version }
        </div>
        <ul className="w-full relative flex flex-wrap gap-2">
          {
            menus.map(menu => {
              return (
                <li key={menu.name} className="inline-flex">
                  <Link 
                    href={menu.href} 
                    className="inline-flex px-2 py-0.5 text-sm border border-slate-600 text-slate-600 bg-white hover:bg-slate-100 rounded-sm cursor-pointer">
                    { menu.name }
                  </Link>
                </li> 
              );
            })
          }
        </ul>
      </div>
    </>
  );
}