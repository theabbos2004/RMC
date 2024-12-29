
import { specializationsList } from "../constans";
import { Slider, Title } from "./shared";
import { useMainContext } from "../contexts";
export default function Specializations() {
  const {windowSize}=useMainContext()
  return (
    <div className="w-full relative py-32" id="Slime-Shop">
        <div className="w-full flex flex-col items-center gap-5 container mx-auto ">
            <Slider 
              sliders={specializationsList}
              positon={windowSize?.width && windowSize?.width > 1024 ?["0","6","6","0"]:["0","0"]}
              titleElement={<div className="lg:absolute z-[1] top-[-3rem]"><Title title="TOP SERVICES" subTitle="Our Specializations" boxClassName="!items-start"/></div>}
              boxClassName="lg:!flex-nowrap !justify-start lg:!justify-center !py-10 gap-5 lg:gap-0"
              sliderClassName="w-full grid-flow-col !grid-cols-none !gap-6 lg:gap-0  overflow-hidden overflow-x-scroll lg:overflow-visible scrollbar-hide lg:place-items-center"
              classNameBoxCard="lg:w-auto"
              />
        </div>
  </div>
  )
}
