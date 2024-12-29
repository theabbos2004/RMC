import { ReactNode } from "react";

export default function Button({type,children,className,disabled}:{type?: "submit" | "button" | "reset",children?:ReactNode,className?:string,disabled?:boolean}) {
  return (
    <button  type={type} disabled={disabled} className={` md:text-xs font-[Roboto] tracking-wide min-w-28 sm:min-w-32 px-8 py-3 md:py-3 md:px-6 flex justify-center items-center rounded-sm font-medium  border-1 border-gray-50 cursor-pointer focus:outline-none hover:text-app-orange  hover:border-app-orange ${className}`}>{children}</button>
  )
}
