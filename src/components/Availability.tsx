import { Describtion, Title } from './shared'
import houseImage from "../assets/Rectangle 731.png"
import { useState } from 'react'
import { AvailabilityType } from '../types'
export default function Availability() {
    const [availability]=useState<AvailabilityType[]>([
        {
            id:0,
            residence:"LUX APARTMENT",
            bedorbath:"3/2",
            size:110,
            salePrice:350000,
            rentPrice:2500,
        },
        {
            id:0,
            residence:"LUX APARTMENT",
            bedorbath:"3/2",
            size:110,
            salePrice:350000,
            rentPrice:2500,
        }
    ])
  return (
    <div className="relative" id="architecture">
        <div className="flex flex-col items-center min-h-[30rem] py-20 gap-5 container1">
            <div className='pb-10 w-full flex justify-between'>
                <Title title='OUR PROJECT' subTitle='Check Availability' boxClassName="!items-start"/>
                <Describtion desc='The unique architect with ideas from outside the world. Where design and science meet. With people’s comfort in mind' boxClassName="!w-[45%]"/>
            </div>
            <div className='w-full flex gap-10'>
                <div className='w-full md:w-[70%]'>
                    <table className='table-fixed border-collapse w-full'>
                        <thead className='text-app-orange'>
                            <tr className='border-b-2 border-b-app-gray-1 text-left'>
                                <th className='py-2'>RESIDENCE</th>
                                <th className='py-2'>BED/BATH</th>
                                <th className='py-2'>SQ. FT.</th>
                                <th className='py-2'>SALE PRICE</th>
                                <th className='py-2'>RENT PRICE</th>
                                <th className='py-2'>FLOOR PLAN</th>
                            </tr>
                        </thead>
                        <tbody className='w-full'>
                            {
                                availability?.map((item:AvailabilityType,indx:number)=>
                                    <tr key={indx} className='border-b-2 border-b-app-gray-1'>
                                        <td className='py-4'>{item?.residence}</td>
                                        <td className='py-4'>{item?.bedorbath}</td>
                                        <td className='py-4'>{item?.size}</td>
                                        <td className='py-4'>${item?.salePrice}</td>
                                        <td className='py-4'>${item?.rentPrice}</td>
                                        <td className='py-4 cursor-pointer hover:underline hover:text-app-orange]'>VIEW NOW</td>
                                    </tr>
                                ) 
                            }
                        </tbody>
                    </table>
                </div>
                <div className='hidden md:block w-[30%]'>
                    <img src={houseImage}/>
                </div>
            </div>
        </div>
    </div>
  )
}
