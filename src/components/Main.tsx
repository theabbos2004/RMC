import bgImage from "../assets/Rectangle 717.png"
import bgLine from "../assets/path1.png"
import starImage from "../assets/Group 11751.png"
import { Button, Title } from "./shared"
import { Link } from "react-scroll"
import { useMainContext } from "../contexts"
export default function Main() {
    const {setIsMenu,activeNavbar}=useMainContext()
  return (
      <div id="Main" className='relative flex flex-col lg:flex-row md:min-h-[100vh] w-full overflow-hidden'>
         <img className="hidden lg:block absolute top-20 left-0 z-0  w-10/12 lg:w-7/12 h-full bg-[100%_100%] object-left-top object-cover" src={bgLine}/>
        <div className="w-full md:min-h-[100vh] flex flex-col lg:flex-row">
            <div className="container relative mx-auto h-full py-20">
                <div className="absolute rotate-[-90deg] lg:rotate-0 top-[15rem] lg:top-auto lg:bottom-0 right-[-14rem] lg:left-0 z-0 lg:w-7/12">
                    <h1 className=" text-9xl lg:text-8xl text-app-gray font-black font-[Roboto] uppercase">Interior</h1>
                </div>
                <div className="w-full lg:w-2/5 h-full relative pr-14 flex flex-col justify-center gap-6">
                    <img className="absolute top-20 right-24 z-0 size-8 object-center object-cover" src={starImage}/>
                    <Title title="Architecture design" titleClassName="!text-sm" subTitle="Professional Interior Design" boxClassName="!items-start !gap-6" subTitleClassName="!font-semibold !uppercase" subTitleStyle={{wordSpacing:"100vw"}}/>
                    <p className="text-gray-400">Design for now with the awareness of yesterday and unknown tomorrow. Because small details make the perfect design. Helping you choose between good and best.</p>
                    <Link
                        to={"Contact"} 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                        className={`tracking-wide  font-[Roboto] no-underline`}
                        style={{lineHeight:"18.75px"}}
                        onClick={()=>{
                            activeNavbar({
                                id:112,
                                title:"",
                                route:"",
                                active:false
                            })
                            setIsMenu(false)
                        }}
                        >
                        <Button className="bg-transparent text-gray-50 capitalize">Let’s work together</Button>                    
                    </Link>
                </div>
            </div>
            <img className="lg:absolute md:h-[35rem] md:w-full md:bottom-0 lg:top-0 lg:right-0 z-[1] mx-auto p-0 lg:mx-0 lg:w-2/4 xl:w-7/12 lg:h-full object-center object-cover" src={bgImage}/>
        </div>
    </div>  
  )
}


