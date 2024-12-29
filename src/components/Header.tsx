import { Link } from "react-scroll"
import { useMainContext } from "../contexts/index"
import { Button } from "./shared"
import logo from "../assets/logo.png"
import { useEffect, useState } from "react"
import { CloseOutlined, MenuOutlined } from "@ant-design/icons"
export default function Header() {
    const {setIsMenu,isMenu,navborList,activeNavbar}=useMainContext()
    const [scrollPosition, setScrollPosition] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])
  return (
    <div className={`w-full flex flex-col fixed z-10 top-0 left-0 gap-0 transition-transform ${isMenu && "bg-dark-blue md:bg-transparent"}`}
        style={{backdropFilter:scrollPosition>10 ?'blur(15px)':''}}
    >
        <div className={`w-full sm:h-20 flex py-1 ${isMenu?"h-[calc(100vh)] flex-col":"h-16 flex-row"}`}
             style={{transition:"all 0.5 ease-in-out"}}
        >
            <div className={`${isMenu?"h-[5%]":"h-full"} sm:h-full container mx-auto  flex items-center justify-between border-none`}>
                <div className="h-full flex items-center gap-20">
                    <Link
                        to={"Main"} 
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
                        <img src={logo} className="h-8 cursor-pointer"/>
                    </Link>
                    <ul className={`sm:flex gap-4 hidden text-xs uppercase`}>
                        {navborList.map((nav,navIndex)=>
                            <li key={navIndex} className="hover:text-app-orange cursor-pointer">
                                <Link
                                    to={nav?.route} 
                                    key={navIndex}
                                    spy={true} 
                                    smooth={true} 
                                    offset={50} 
                                    duration={500} 
                                    className={`tracking-wide  font-[Roboto] no-underline ${nav?.active ?'text-gray-200':"text-app-gray-1"} hover:text-gray-100 cursor-pointer`}
                                    style={{lineHeight:"18.75px"}}
                                    onClick={()=>{
                                        activeNavbar(nav)
                                        setIsMenu(false)
                                    }}
                                    >
                                    {nav?.title}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="text-3xl flex sm:hidden">
                    <MenuOutlined 
                        className={`${isMenu && " hidden "}]`}
                        onClick={()=>{setIsMenu(true)}}
                    />
                    <CloseOutlined 
                        className={`${!isMenu && " hidden "}]`}
                        onClick={()=>{setIsMenu(false)}}
                    />
                </div>
                <Link
                    to={"Contact"} 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    className={`hidden sm:block tracking-wide font-[Roboto] no-underline`}
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
                    <Button className="bg-transparent text-gray-50 uppercase">contact</Button> 
                </Link>
            </div>
            <div className={`w-full flex justify-center items-center ${isMenu?"h-[95%] sm:hidden":"hidden"}`}>
            <ul className={`flex flex-col text-2xl uppercase gap-10`}>
                        {navborList.map((nav,navIndex)=>
                            <li key={navIndex} className=" text-center hover:text-app-orange cursor-pointer ">
                                <Link
                                    to={nav?.route} 
                                    key={navIndex}
                                    spy={true} 
                                    smooth={true} 
                                    offset={50} 
                                    duration={500} 
                                    className={`tracking-wide  font-[Roboto] no-underline ${nav?.active ?'text-gray-200':"text-app-gray-1"} hover:text-gray-100 cursor-pointer`}
                                    style={{lineHeight:"18.75px"}}
                                    onClick={()=>{
                                        activeNavbar(nav)
                                        setIsMenu(false)
                                    }}
                                    >
                                    {nav?.title}
                                </Link>
                            </li>
                        )}
                    </ul>

            </div>
        </div>
    </div>
  )
}
