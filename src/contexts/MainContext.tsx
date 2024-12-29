import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IContextType, INavbarItem, ProjectsNavbor, WindowSizeType } from "../types";
import { navborList as oldNavbarList, ProjectsListNavbor } from "../constans";

const INITIAL_STATE : IContextType = {
    windowSize:{width:window.innerWidth,height:window.innerHeight},
    isMenu:false,
    setIsMenu:()=>{},
    navborList:oldNavbarList,
    activeNavbar:()=>{},
    projectNavborList:ProjectsListNavbor,
    activeProjectNavbar:()=>{}
}
const Context = createContext<IContextType>(INITIAL_STATE);

export default function MainContext({ children }: { children: ReactNode }) {
    const [isMenu, setIsMenu] = useState<boolean>(false)
    const [navborList, setNavborList] = useState<INavbarItem[]>(oldNavbarList)
    const [projectNavborList, setProjectNavborList] = useState<ProjectsNavbor[]>(ProjectsListNavbor)

    const [windowSize,setWindowSize]=useState<WindowSizeType>({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    useEffect(()=>{
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      handleResize()
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    },[])

    const activeNavbar=(navbar:INavbarItem)=>{
      const newNavbar=navborList?.map((item)=>{
        if(item?.id==navbar?.id){
          return {...item,active:true}
        }
        else{
          return {...item,active:false}
        }
      })
      setNavborList(newNavbar)
    }

    const activeProjectNavbar=(navbar:ProjectsNavbor)=>{
      const newNavbar=projectNavborList?.map((item)=>{
        if(item?.id==navbar?.id){
          return {...item,active:true}
        }
        else{
          return {...item,active:false}
        }
      })
      setProjectNavborList(newNavbar)
    }
    const value = {
        windowSize,
        isMenu,
        setIsMenu,
        navborList,
        activeNavbar,
        projectNavborList,
        activeProjectNavbar
      }
      return (
        <Context.Provider value={value}>
          {children}
        </Context.Provider>
  )
}
export const useMainContext = () => useContext(Context)
