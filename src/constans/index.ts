import floorImgUrl from "../assets/Rectangle 719.png"
import roomOrangeImgUrl from "../assets/Rectangle 720.png"
import outSideImgUrl from "../assets/Rectangle 722.png"
import cityImgUrl from "../assets/Rectangle 721.png"
import AboutImgUrl from "../assets/Rectangle 723.png"
import About1ImgUrl from "../assets/Rectangle 724.png"
import ProjectImgUrl from "../assets/Rectangle 725.png"
import ProjectImgUrl1 from "../assets/Rectangle 726.png"
import ProjectImgUrl2 from "../assets/Rectangle 727.png"
import ProjectImgUrl3 from "../assets/Rectangle 728.png"
import ProjectImgUrl4 from "../assets/Rectangle 754.png"
import ProjectImgUrl5 from "../assets/Rectangle 755.png"
import ProjectImgUrl6 from "../assets/Rectangle 756.png"
import ProjectImgUrl7 from "../assets/Rectangle 757.png"
import { ProjectsImage, ProjectsNavbor, Specializations } from "../types"

export const navborList=[
    {
        id:0,
        title:"THE STUDIO",
        route:"THE-STUDIO",
        active:true
    },
    {
        id:1,
        title:"ROJECTS",
        route:"ROJECTS",
        active:false
    },
    {
        id:2,
        title:"architecture",
        route:"architecture",
        active:false
    },
    {
        id:3,
        title:"Blog",
        route:"Blog",
        active:false
    }
]
export const AboutImageList:Specializations[]=[
    {
        id:0,
        imageUrl:AboutImgUrl
    },
    {
        id:1,
        imageUrl:About1ImgUrl
    }
]
export const specializationsList:Specializations[]=[
    {
        id:0,
        title:"Floor plan",
        main:"Tempor incididunt ut labore et dolore magna aliqua. ",
        imageUrl:floorImgUrl
    },
    {
        id:1,
        title:"Interior Design",
        main:"Tempor incididunt ut labore et dolore magna aliqua. ",
        imageUrl:roomOrangeImgUrl
    },
    {
        id:2,
        title:"Architecture Design",
        main:"Tempor incididunt ut labore et dolore magna aliqua. ",
        imageUrl:outSideImgUrl
    },
    {
        id:3,
        title:"Construction",
        main:"Tempor incididunt ut labore et dolore magna aliqua. ",
        imageUrl:cityImgUrl
    },
]
export const ProjectsListNavbor:ProjectsNavbor[]=[
    {
        id:0,
        title:"All",
        route:"all",
        active:true
    },
    {
        id:1,
        title:"Architecture",
        route:"Architecture",
        active:false
    },
    {
        id:2,
        title:"Construction",
        route:"Construction",
        active:false
    },
    {
        id:3,
        title:"Interior Design",
        route:"Interior-Design",
        active:false
    },
]
export const ProjectsImageList:ProjectsImage[]=[
    {
        id:0,
        imageUrl:ProjectImgUrl,
        type:"Architecture"
    },
    {
        id:1,
        imageUrl:ProjectImgUrl1,
        type:"Construction"
    },
    {
        id:2,
        imageUrl:ProjectImgUrl2,
        type:"Interior-Design",
    },
    {
        id:3,
        imageUrl:ProjectImgUrl3,
        type:"Interior-Design",
    },
    {
        id:4,
        imageUrl:ProjectImgUrl4,
        type:"Construction"
    },
    {
        id:5,
        imageUrl:ProjectImgUrl5,
        type:"Interior-Design",
    },
    {
        id:6,
        imageUrl:ProjectImgUrl6,
        type:"Architecture"
    },
    {
        id:7,
        imageUrl:ProjectImgUrl7,
        type:"Construction"
    }
]