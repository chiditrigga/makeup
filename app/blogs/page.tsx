'use client'

import NAV from '@/components/nav'
import React, { useState } from 'react'
import no1 from '../../public/photo-1.png'
import no21 from '../../public/photo-21.png'
import no16 from '../../public/photo-16.png'
import no14 from '../../public/photo-14.png'
import no13 from '../../public/photo-13.png'
import no3 from '../../public/photo-3.png'
import no8 from '../../public/photo-8.png'
import no20 from '../../public/photo-20.png'
import no6 from '../../public/photo-6.png'
import no18 from '../../public/photo-18.png'
import no22 from '../../public/photo-22.png'
import no7 from '../../public/photo-7.png'
import Image from 'next/image'
import Link from 'next/link'


const Blogs = () => {
  const list = [
    {
        id: 0,
        tag:"Beauty",
        date:"7 jan 2024",
        des:"5 chemical-free perfumes to try this Spring",
        pic: no1
    },{ tag:"Life style",
    id: 1,
    date:"7 jan 2024",
    des:"10 habits that changed my life",
    pic: no21},
    { tag:"Beauty",
    id: 2,
    date:"26 Dec 2023",
    des:"Beauty essentials in every girl's must-have makeup",
    pic: no16},
    {
        tag:"Fashion",
        id: 3,
        date:"26 Dec 2023",
        des:"Guide to Winter cleaning closet",
        pic: no14
    },
    {
        tag:"Beauty",
        id: 4,
        date:"12 Dec 2023",
        des:"Best in Beauty 2023: The Best Skin, Hair, Makeup, and Body Products of the Year",
        pic: no13
    },
    {
        tag:"Fashion",
        id: 5,
        date:"12 Dec 2023",
        des:"12 Style essentials that make it easy to get dressed",
        pic: no3
        
    },
    {
        tag:"Fashion",
        id: 6,
        date:"1 Dec 2023",
        des:"The Key Spring/Summer 2024 Trends To Know Now",
        pic: no8
        
    },
    {
        tag:"Life style",
        id: 7,
        date:"26 Dec 2023",
        des:"A Woman's lifestyle journal",
        pic: no20
        
    },
    {
        tag:"Beauty",
        id: 8,
        date:"8 Nov 2023",
        des:"So, You Slept in Your Makeup—Try These 10 Skincare Tips to Reverse It",
        pic: no6
        
    },
    {
        tag:"Beauty",
        id: 9,
        date:"2 Nov 2023",
        des:"How I Decluttered and Organised My Makeup Stash",
        pic: no7
        
    },
    {
        tag:"Beauty",
        id: 10,
        date:"16 oct 2023",
        des:"6 Eye Makeup Looks Anyone Can Do",
        pic: no22
        
    },
    {
        tag:"Beauty",
        id: 11,
        date:"10 oct 2023",
        des:"Secrets From a Makeup Artist: How to Find Your Perfect Red Lipstick",
        pic: no18
        
    }
]

    const [lists,setLists] = useState('all')

     const filter = () => {
      if (lists == 'all') {
        return list
        
      }else if(lists == 'Beauty'){
        return list.filter( (fil) => fil.tag == 'Beauty' )
      }else if (lists == 'Fashion'){
        return list.filter( (fil) => fil.tag == 'Fashion')
      }else if ( lists == 'Life Style'){
        return list.filter( (fil) => fil.tag == 'Life style')
      }
     }

  return (
    <>
   <div className='bg-[#F5F5F5] min-h-[40vh]'>
   

   <div className='flex justify-between  md:mx-[10vw] pt-20'>
    <div>
         <h1 className='text-2xl'>Blog Posts</h1>
    </div>
       
    <div className='overflow-x-auto  font-medium'>
       <ul className='inline-flex gap-x-9 flex-nowrap'>
         <button onClick={()=> setLists('all')} className=' hover:bg-slate-700'> <li className='border hover:text-white border-[#F5F5F5]  py-[6px] px-[20px] bg-[#afafaf6c]'>All</li></button>
         <button onClick={()=> setLists('Beauty')} className=' hover:bg-[red]'> <li className='border hover:text-white hover:bg-[red] border-[#F5F5F5]  py-[6px] px-[20px] bg-[#afafaf6c]'>Beauty </li></button>
       <button onClick={()=> setLists('Fashion')} className=' hover:bg-[yellow]'>   <li className='border hover:text-white hover:bg-[yellow] border-[#F5F5F5]  py-[6px] px-[20px] bg-[#afafaf6c]'>Fashion</li></button>
         <button onClick={()=> setLists('Life Style')} className=' hover:bg-[blue]'> <li className='border hover:text-white hover:bg-[blue] border-[#F5F5F5]  py-[6px] px-[20px] bg-[#afafaf6c]'>Life style</li></button>
        
       </ul>
    </div>

   </div>
   <div className='grid md:grid-cols-3 lg:grid-cols-4 md:mx-[10vw] gap-x-2 gap-y-2 mt-10' >
   {filter()?.map( lis => {
    
        return (
            <div className='lg:max-w-[20vw] lg:p-5 md:p-3 p-2 ' key={lis.des}  style={{ background: "white" }}>
              
              <Link href={`/${lis.id}`}>
                <div className=''>
                    <Image alt='blogs' src={lis.pic} className=' xl:min-h-[23vh] lg:min-h-[20vh] lg:max-h-[20vh] md:min-h-[20vh] md:max-h-[20vh] xl:max-h-[20vh]'/>
                    <div className="flex justify-between pt-3">
                  <span>
                    {" "}
                    <button
                      className={lis.tag === "Beauty"? "bg-[red]":lis.tag =="Fashion"?"bg-[yellow]":lis.tag == "Life style"?"bg-[blue]":""}
                      style={{
                       
                        borderRadius: "30px",
                        color: "white",
                       
                        padding:"3px"
                      }}
                    >
                      {lis.tag}
                    </button>
                  </span>
                  <span>{lis.date}</span>
                  
                </div>
{lis.des}
                </div>
                </Link>
                </div> 
        )
       })}
   </div>






















         
   </div>

    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Blogs