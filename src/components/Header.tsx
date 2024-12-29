import { Link } from "react-scroll"
import { useMainContext } from "../contexts/index"
import { Button } from "./shared"
import logo from "../assets/logo.png"
export default function Header() {
    const {setIsMenu,isMenu,navborList,activeNavbar}=useMainContext()
  return (
    <div className={`w-full flex flex-col fixed z-10 top-0 left-0 gap-0`}>
        <div className={`w-full sm:h-20 flex py-1 ${isMenu?"h-[calc(100vh)] flex-col":"h-16 flex-row"}`}>
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
                    <Button className="bg-transparent text-gray-50 uppercase">contact</Button> 
                </Link>
            </div>
        </div>
    </div>
  )
}
