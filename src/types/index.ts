import { Dispatch, SetStateAction } from "react"
export type INavbarItem={id:number,title:string,route:string,active:boolean}
export type IContextType = {
    windowSize:WindowSizeType,
    isMenu:boolean,
    setIsMenu:Dispatch<SetStateAction<boolean>>,
    navborList:{id:number,title:string,route:string,active:boolean}[]
    activeNavbar:(navbar:INavbarItem)=>void,
    projectNavborList:ProjectsNavbor[],
    activeProjectNavbar:(navbar:ProjectsNavbor)=>void,
}
export type WindowSizeType = {width?:number,height?:number}
export type Specializations = {
    id:number,
    title?:string,
    main?:string,
    imageUrl:string
}
export type ProjectsImage = {
    id:number,
    imageUrl:string,
    type?:string
}
export type ProjectsNavbor = {
    id:number,
    title:string,
    route?:string,
    active?:boolean,
}
export type ProtsentType = {
    id:number,
    title?:string,
    number?:number
}
export type AvailabilityType = {
    id:number,
    residence:string,
    bedorbath:string,
    size:number,
    salePrice:number,
    rentPrice:number
}
export type MembersType = {
    id:number,
    name:string,
    job:string
}

