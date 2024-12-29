import { Link } from "react-scroll"
import logo from "../assets/logo.png"
import { useMainContext } from "../contexts"
export default function Footer() {
    const {setIsMenu,navborList,activeNavbar}=useMainContext()
  return (
    <div className="relative min-h-96 bg-[rgba(26,29,38,1)]" id="Contact">
        <ul className="flex flex-row flex-wrap justify-around md:justify-between pt-44 pb-10 md:gap-5 container1">
            <li className="w-full md:w-[30%] pr-32 pb-10 md:pr-10 flex flex-col justify-between gap-5">
                <img src={logo} className="w-28"/>
                <p>
                    Take a look at how we designed this housesimply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </p>
            </li>
            <li className="relative w-[30%] flex md:justify-center">
                <div className={`absolute hidden md:block left-0 w-[0.2rem] h-full bg-[linear-gradient(transparent,white,transparent)]`}></div>
                 <ul className={`flex flex-col md:px-10 gap-5 text-xs uppercase`}>
                    {navborList.map((nav,navIndex)=>
                        <li key={navIndex} className="hover:text-app-orange cursor-pointer">
                            <Link
                                to={nav?.route} 
                                key={navIndex}
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500} 
                                className={`tracking-wide  font-[Roboto] no-underline ${nav?.active ?'text-app-orange':"text-app-gray-1"} hover:text-orange-200 cursor-pointer`}
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
            </li>
            <li className="relative w-[30%] flex">
                <div className={`absolute hidden md:block left-0 w-[0.2rem] h-full bg-[linear-gradient(transparent,white,transparent)]`}></div>
                <div className="flex flex-col md:pl-10 gap-5 leading-5">
                    <div className="flex flex-col gap-2 ">
                        <h1 className="text-gray-50 text-5xl font-medium font-[Garamond] capitalize">Visit</h1>
                        <p className="text-app-gray-1">Logan Barker, 865 Oak Boulevard, Elk Grove, Vermont 95184</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-gray-50 text-5xl font-medium font-[Garamond] capitalize">Call</h1>
                        <p className="text-app-gray-1">017-6153-1774</p>
                    </div>
                </div>
            </li>
        </ul>
        <div className="w-full min-h-10 flex flex-col items-center justify-center border-t-[0.1rem] border-gray-700">
            <div>©  Copyright 2024 Email: theabbos1@gmail.com</div>
        </div>
    </div>
  )
}
