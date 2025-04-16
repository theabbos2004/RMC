import { memo, ReactNode, useEffect, useRef, useState } from "react";
import Card from "./Card";
import { useMainContext } from "../../contexts";
type MyObject = {
    x?: string,
    y?: string,
    imageUrl?:string,
    title?:string,
    main?:string,
  };

function Slider({sliders,positon,sliderClassName,boxClassName,titleElement,classNameBoxCard}:{sliders:any[],positon?:{ x?: string[],y?: string[]},sliderClassName?:string,boxClassName?:string,titleElement?:ReactNode,classNameBoxCard?:string}) {
  const [list,setList]=useState<MyObject[]>()
  const slideChildrenRef =  useRef<HTMLDivElement>(null);
  const slideParentRef =  useRef<HTMLDivElement>(null);
  const {windowSize}=useMainContext()
  useEffect(()=>{
    if(sliders && positon){
            let list :MyObject[]=[...sliders]
            let num=0
            let numX=0
            for (let i = 0; i < list.length; i++) {
              if(positon?.y && !list[i].y){
                list[i].y=`${positon?.y[i-positon?.y.length*num]||0}rem`
                if((i+1)%positon?.y?.length===0){num++}
              }
              if(positon?.x && !list[i].x){
                list[i].x=`${positon?.x[i-positon?.x.length*num]||0}rem`
                if((i+1)%positon?.x?.length===0){numX++}
              }
            }
            setList(list)
        }
    },[sliders,positon])
    
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
    }, [list,windowSize])
  return (
    <div 
        className={`relative w-full flex flex-wrap justify-center pb-[5rem] ${boxClassName}`}
        ref={slideParentRef}
      >
        {titleElement}
        <div className={`w-full grid grid-cols-2 lg:grid-cols-4 ${sliderClassName}`}
          ref={slideChildrenRef}
        >
          {list?.map((specialization: {classNameBoxCard?:string,ref?: React.RefObject<HTMLDivElement>} & MyObject,indx:number)=>
              <Card key={indx} ref={specialization?.ref} imageUrl={specialization?.imageUrl} title={specialization?.title} main={specialization?.main} style={{transform:`translate(${specialization?.x || 0},${specialization?.y || 0})`}} classNameBox={`${classNameBoxCard} ${specialization?.classNameBoxCard}`}/>
          )}
        </div>
    </div>
  )
}
export default memo(Slider)