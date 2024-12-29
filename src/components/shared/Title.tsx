import {  CSSProperties, ReactNode } from "react";

export default function Title({icon,title,subTitle,boxClassName,titleClassName,subTitleClassName,subTitleStyle}:{icon?:ReactNode,title?:string,subTitle?:string,boxClassName?:string,titleClassName?:string,subTitleClassName?:string,subTitleStyle?:CSSProperties}) {
  return (
    <div className={`flex flex-col gap-4 items-center justify-center ${boxClassName}`}>
      <div>{icon}</div>
      <div className={`font-bold text-app-orange text-sm font-[Garamond] tracking-widest uppercase ${titleClassName}`}>{title}</div>
      <div className={`text-gray-50 text-5xl font-semibold font-[Garamond] capitalize inline-block whitespace-pre-line ${subTitleClassName}`}
        style={subTitleStyle}
      >{subTitle}</div>
    </div>
  )
}
