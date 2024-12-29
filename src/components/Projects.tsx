import { useEffect, useState } from "react";
import { ProjectsImageList } from "../constans";
import { Slider, Title } from "./shared";
import { ProjectsImage, ProjectsNavbor } from "../types";
import { useMainContext } from "../contexts";

export default function Projects() {
    const [list,setList]=useState<ProjectsImage[]>()
    const {projectNavborList,activeProjectNavbar}=useMainContext()
    useEffect(()=>{
        if(ProjectsImageList && projectNavborList){
            const activeProjectNavbor=projectNavborList.filter((projectNavbor:ProjectsNavbor)=>projectNavbor?.active && projectNavbor)[0]
            const activeProjectsImage=ProjectsImageList.filter((ProjectsImage:ProjectsImage)=>ProjectsImage?.type === activeProjectNavbor?.route || activeProjectNavbor?.route==="all" && ProjectsImage)
            setList(activeProjectsImage)
        }
    },[ProjectsImageList,projectNavborList])
  return (
    <div className="w-full py-32" id="ROJECTS">
        <div className=" container1">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-10">
                <Title title="OUR PROJECT" subTitle="Our Latest Projects" boxClassName=" !items-start"/>
                <ul className="flex gap-6 pt-14">
                    {
                        projectNavborList?.map((item:any,indx:number)=>
                            <li 
                                key={indx} 
                                className={` cursor-pointer ${item?.active?"text-app-orange":""}`}
                                onClick={()=>activeProjectNavbar(item)}
                                >
                                    {item?.title}
                                    <div className={`${item?.active?"block":"hidden"} w-full h-[0.15rem] bg-app-orange`}></div>
                            </li>
                        )
                    }
                    
                </ul>
            </div>
            <div className="flex w-full">
                {
                    list && 
                        <Slider positon={["0","6"]}  sliders={list} 
                            boxClassName="!justify-center" 
                            classNameBoxCard="border-2 border-gray-50 !w-auto" 
                            sliderClassName="!flex-wrap place-items-center gap-5"
                            />
                }
            </div>
        </div>
    </div>
  )
}
