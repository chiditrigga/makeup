'use client'
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

export default function page({ params }: { params: { id: string } }) {
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
    const [current, setCurrent] = useState(params.id);
  return (
    <div>
      <div className='md:flex  justify-around'>
       <div><Image alt='' src={list[current].pic} className='p-3'/></div>
       <div className=' text-start p-3'> <h3 className=' font-bold text-2xl py-3'>{list[current].des} </h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptatibus ut minus excepturi pariatur dolores rem, totam, quisquam magnam amet deleniti vero iusto! Quibusdam pariatur, magni quia quos deserunt necessitatibus! </div>
       
      







      </div>
    </div>
  )
}
