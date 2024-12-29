import { useEffect, useRef, useState } from "react";
import lineImage from "../assets/path.png";
import usImage from "../assets/Rectangle 4385.png";
import { Title } from "./shared";
import { MembersType, ProjectsImage } from "../types";
import { ProjectsImageList } from "../constans";
export default function OurTeam() {
    const [members]=useState<MembersType[]>([
            {id:0,name:"Cody Fisher",job:"CEO"},
            {id:1,name:"Savannah Nguyen",job:"Interior architect"},
            {id:2,name:"Jerome Bell",job:"Interior"},
            {id:3,name:"Cameron Williamson",job:"architect"},
            {id:4,name:"Marvin McKinney",job:"COnstruction head"},
        ])
    const [list,setList]=useState<ProjectsImage[]>()
    useEffect(()=>{
        if(ProjectsImageList){
            setList(ProjectsImageList)
        }
    },[ProjectsImageList])
    const slideChildrenRef =  useRef<HTMLDivElement>(null);
    const slideParentRef =  useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (slideChildrenRef.current && list && list?.length > 1) {
            const slideChildrenCurrent = slideChildrenRef.current;
            const selectedChild = slideChildrenCurrent.children[Math.floor(slideChildrenCurrent.children.length/2)-1] as HTMLElement;
            const firstChild = slideChildrenCurrent.children[0] as HTMLElement;
            setTimeout(() => {        
                const parentWidth=Number(slideParentRef.current?.clientWidth)
                const offsetLeft=selectedChild.offsetLeft-firstChild.offsetLeft
                const all=offsetLeft-parentWidth/2+selectedChild.clientWidth/2+firstChild.offsetLeft
                slideChildrenCurrent.scrollLeft = all
            }, 100);
        }
      }, [list])

  return (
    <div className="relative w-full pb-72 lg:pb-40" id="Blog">
        <img className=" w-full h-24 absolute left-0 bg-[100%_100%] object-fill" src={lineImage}/>
        <div className="pt-16 flex flex-col gap-10 py-10 container1">
            <Title title="OUR PROJECT" subTitle="Meet With Our Team" boxClassName="!items-start"/>
            <img src={usImage} className=" w-full"/>
            <ul>
                {
                    members?.map((member:MembersType,indx:number)=>
                        <li key={indx} className="py-4 flex flex-row border-b-2 border-b-app-gray-1 font-semibold">
                            <h4>{`${member?.name}  -  ${member?.job}`}</h4>
                        </li>
                    )
                }
            </ul>
        </div>
        <div className="w-full max-h-96 absolute z-[1]  container left-[50%] bottom-[-8rem] translate-x-[-50%] !flex !flex-nowrap"
            ref={slideParentRef}
        >
                <div
                    className="w-full grid grid-flow-col auto-cols-[16rem] lg:auto-cols-auto gap-6 lg:gap-0  overflow-hidden overflow-x-scroll scrollbar-hide"
                    ref={slideChildrenRef}
                    >
                    {
                        list?.map((image:ProjectsImage,indx:number)=>
                            <img
                                key={indx}
                                className={`w-64 h-full md:w-64 object-cover object-center cursor-pointer bg-[100%_100%] bg-[url(${image})]`}
                                src={image?.imageUrl}
                                />
                        )
                    }
                </div>
        </div>
    </div>
  )
}
