
import { specializationsList } from "../constans";
import { Slider, Title } from "./shared";
import { useMainContext } from "../contexts";
import { motion,useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from "react";
import { Specializations as SpecializationsType } from "../types";
export type SpecializationsTypes = {classNameBoxCard?:string,x?:string,y?:string,ref?:React.RefObject<HTMLDivElement>} & SpecializationsType
export default function Specializations() {
  const {windowSize}=useMainContext()
  const {scrollYProgress}=useScroll()
  const [latest,setLatest]=useState<number>()
  const [sliders,setSliders]=useState<SpecializationsTypes[]>([])
  const [positon,setPostion]=useState<{ x?: string[],y?: string[]}[]>([])
  const sectionRef=useRef<HTMLDivElement>(null)
  const sectionChildRef=useRef<HTMLDivElement>(null)
  useEffect(()=>{
    if(specializationsList && sectionRef?.current){
      const halfHeightOfSectionRef=Math.round((sectionRef?.current?.offsetTop + sectionRef?.current?.clientHeight)/1000*7)
      const sectionChildRefHeight=sectionChildRef.current && sectionChildRef.current?.clientHeight/100
      let list:SpecializationsTypes[]=[...specializationsList]
      list[1]={...specializationsList[1],
        ref:sectionChildRef,
        classNameBoxCard:`opacity-[2]`,
        x:`${(latest && Number(windowSize?.width)> 1024) ? 
          (
            (latest >= halfHeightOfSectionRef) ? windowSize?.width && windowSize?.width/45 :
            (latest > 13) ? windowSize?.width && latest * (windowSize?.width/45)/halfHeightOfSectionRef:
            0
          ):
          0
        }rem`,
        y:`${(latest && Number(windowSize?.width)> 1024) ? 
          (
            (latest > 13) && sectionChildRefHeight ? Number(windowSize?.height)/100-(sectionChildRefHeight/2):
            6
          ):
          0
        }rem`
      }
      list[2]={...specializationsList[2],
        y:`${(latest && Number(windowSize?.width)> 1024) ? 
          (
            (latest > 13) && sectionChildRefHeight ? Number(windowSize?.height)/100-(sectionChildRefHeight/2):
            6
          ):
          0
        }rem`
      }
      setSliders(list)
    }
    if (
      Number(windowSize?.width) > 1024 &&
      (
        !positon[positon.length - 1] || 
        JSON.stringify(positon[positon.length - 1]) !== JSON.stringify({ y: ["0", "6", "6", "0"] })
      )
    ) {
      setPostion((IState) => {
        const newState = [...IState];
        newState.push({ y: ["0", "6", "6", "0"] });
        return newState;
      });
    }
    else if( 
      Number(windowSize?.width) < 1024 &&
      JSON.stringify(positon[positon.length - 1]) !== JSON.stringify({ y: ["0", "0"] })
    ){
      setPostion(IState=>{
        const newState=[...IState]
        newState.push({y:["0","0"]})
        return newState
      })
    }
  },[latest,sectionRef,windowSize,sectionChildRef])
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setLatest(Math.round(latest*100));
  })
  return (
    <div ref={sectionRef} className="w-full relative py-32 lg:h-[250vh]" id="Slime-Shop">
        <div
          className={`w-full flex flex-col items-center gap-5 container mx-auto sticky top-[3rem]`}
          >
            <Slider
              sliders={sliders}
              positon={positon[positon.length-1]}
              titleElement={
                <motion.div
                  initial={{opacity:0}}
                  whileInView={{opacity:Number(windowSize?.width)> 1024 ? (latest && (latest < 10) ? 1 : 0):1}}
                  transition={{duration:0.5}}
                  className="lg:absolute z-[1] lg:top-[-3rem]">
                  <Title title="TOP SERVICES" subTitle="Our Specializations" boxClassName="!items-start"/>
                </motion.div>}
              boxClassName="lg:!flex-nowrap !justify-start lg:!justify-center !py-10 gap-5 lg:gap-0"
              sliderClassName="w-full grid-flow-col !grid-cols-none !gap-6 lg:gap-0  overflow-hidden overflow-x-scroll lg:overflow-visible scrollbar-hide lg:place-items-center"
              classNameBoxCard={`lg:w-auto ${Number(windowSize?.width)> 1024 ? (latest && (latest < 13) ? "opacity-1" : "opacity-0"):"opacity-1"} duration-300`}
              />
        </div>
        <div className={` hidden lg:block sticky container top-[calc(100vh/2-5rem)]`}>
          <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:latest && (latest < 18) ? 0 : 1}}
            transition={{duration:0.5}}
            className="w-2/4 flex justify-center"
            >
            <p>
              Looking for eye-catching, modern, and professional designs?
              Whether it's logos, social media posts, brand identity, or website UI — I've got you covered!

              🎨 Creative. Reliable. Unique.
              With a passion for design and a deep understanding of aesthetics, I turn your vision into visuals that speak louder than words.
            </p>
          </motion.div>
        </div>
  </div>
  )
}
