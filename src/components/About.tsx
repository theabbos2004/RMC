import { AboutImageList } from "../constans";
import { Describtion, Protsent, Slider, Title } from "./shared";
import aboutImage from "../assets/Rectangle 742 (1).png"
import groupImage from "../assets/Group.png"
import starImage from "../assets/star.png"
export default function About() {
  return (
    <div className="relative" id="THE-STUDIO">
        <div className="flex flex-col lg:flex-row py-32 pb-20 container1 gap-10 lg:gap-0">
            <div className="flex flex-col w-full lg:w-2/4 gap-5">
              <Title subTitle="ABOUT US" boxClassName="!items-start"/>
              <div className="flex pl-24">
                <Describtion desc="As development continues, engineers may visit building destinations to guarantee that temporary workers pursue the plan, keep to the timetable, utilize the predefined materials, and meet work-quality models."/>
              </div>
              <div className="flex">
                <div className="flex w-full lg:flex-col gap-10 lg:gap-5 flex-col-reverse">
                  <Protsent 
                    data={{id:1,number:85,title:"Satisfied Clients"}} 
                    boxClassName="!flex-row !items-center !w-2/3 !gap-10"
                    numberClassName="!text-9xl"
                    protsentClassName="!text-5xl"
                    />
                  <div className="w-full flex items-center justify-center">
                    <img src={aboutImage} className="w-full lg:w-3/5 object-cover object-center"/>
                    <div className=" hidden relative w-2/5 lg:flex justify-center items-center">
                      <img src={groupImage} className=" w-3/4 object-cover object-center"/>
                      <img src={starImage} className="absolute w-1/6 object-cover object-center"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/4 flex items-center justify-center">
              <Slider 
                positon={["5","0"]} 
                sliders={AboutImageList} 
                sliderClassName="!grid-cols-2 !gap-10 !lg:gap-4 place-items-center" 
                classNameBoxCard="!w-auto" 
                />
            </div>
        </div>
    </div>
  )
}
