import { Button, Protsent, Title } from './shared'
import housePlaneImage from "../assets/home-arch.png"
import { useState } from 'react'
import { ProtsentType } from '../types'
import { RIcon } from '../assets/icon'

export default function Experience() {
    const [protsentList]=useState<ProtsentType[]>([
        {id:0,title:"Architecture",number:75},
        {id:1,title:"Construction",number:85},
        {id:2,title:"Interior Design",number:65},
    ])
  return (
    <div className={`w-full relative  flex items-center min-h-96 bg-dark-blue`}>
        <div className=' h-full py-10 container mx-auto flex flex-col-reverse md:flex-row gap-4 items-center justify-between'>
            <div className='w-full md:w-[30%] flex justify-center items-center'>
                <img className=' w-full' src={housePlaneImage}/>
            </div>
            <div className='w-full md:w-[30%] flex flex-col items-center justify-center gap-8 py-5'>
                <Title subTitle='We Create Digital Experience' boxClassName='!gap-0'/>
                <div className='flex justify-between w-full'>
                    {
                        protsentList?.map((item,indx)=><Protsent data={item} key={indx}/>)
                    }
                </div>
                <div className='w-full'>
                    <Button>Lets work together</Button>
                </div>
            </div>
            <div className='hidden h-full md:w-[30%] md:flex items-center justify-center'>
                <RIcon className=' absolute top-0 right-0 xl:right-[10%]' height={"100%"} fill='rgba(11, 14, 23, 0.4)'/>
            </div>
        </div>
    </div>
  )
}
