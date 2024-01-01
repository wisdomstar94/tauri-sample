"use client"

import Link from "next/link";
import { useState } from "react";

export function RootLayoutClient() {
  const [menus, setMenus] = useState([
    { name: '/greet', href: '/greet' },
  ]);

  return (
    <>
      <div className="w-full p-4 bg-slate-300 flex relative gap-2">
        {
          menus.map(menu => {
            return (
              <Link 
                key={menu.name} 
                href={menu.href} 
                className="inline-flex px-2 py-0.5 text-sm border border-slate-600 text-slate-600 bg-white hover:bg-slate-100 rounded-sm cursor-pointer">
                { menu.name }
              </Link>
            );
          })
        }
      </div>
    </>
  );
}