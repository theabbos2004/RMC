import { memo, ReactNode, useEffect, useRef, useState } from "react";
import Card from "./Card";
type MyObject = {
    y?: string,
    imageUrl?:string,
    title?:string,
    main?:string,
  };

function Slider({sliders,positon,sliderClassName,boxClassName,titleElement,classNameBoxCard}:{sliders:any[],positon?:string[],sliderClassName?:string,boxClassName?:string,titleElement?:ReactNode,classNameBoxCard?:string}) {
    const [list,setList]=useState<MyObject[]>()
    const slideChildrenRef =  useRef<HTMLDivElement>(null);
    const slideParentRef =  useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(sliders && positon){
            const list :MyObject[]=sliders
            let num=0
            for (let i = 0; i < list.length; i++) {
                list[i].y=`${positon[i-positon?.length*num]}rem`
                if((i+1)%positon?.length===0){num++}
            }
            setList(list)
        }
    },[sliders])

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
    <div 
        className={`relative w-full flex flex-wrap justify-center pb-[5rem] ${boxClassName}`}
        ref={slideParentRef}
      >
        {titleElement}
        <div className={`w-full grid grid-cols-2 lg:grid-cols-4 ${sliderClassName}`}
          ref={slideChildrenRef}
        >
          {list?.map((specialization:MyObject,indx:number)=>
              <Card key={indx} imageUrl={specialization?.imageUrl} title={specialization?.title} main={specialization?.main} style={{transform:`translateY(${specialization?.y})`}} classNameBox={classNameBoxCard}/>
          )}
        </div>
    </div>
  )
}
export default memo(Slider)