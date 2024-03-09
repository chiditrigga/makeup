import React from 'react'
import Logo from '../public/logo.svg'
import insta from '../public/instagram.svg'
import mail from '../public/mail.svg'
import rss from '../public/rss.svg'
import search from '../public/search.svg'
import twitter from '../public/twitter.svg'
import facebook from '../public/facebook.svg'
import ig from '../public/instagram.svg'
import Image from 'next/image'
import Link from 'next/link'


const NAV = () => {
  return (
    <div className='shadow-2xl'>
    <div className='flex justify-between pt-5 md:mx-[10vw] '>
        <div>
         <Link href={'/'}><Image width={200}  src={Logo} alt='logo' /></Link> 
        </div>
        <div>
             <ul className='flex gap-5'>
                <li>About</li>
               <li><Link href={'/blogs'}>Blog</Link> </li>
                <li>Contact</li>
                
                <li className=''>
                    <ul className='flex gap-3 '>
                      
                        <li>  <Image width={20}  src={rss} alt='rss' /> </li>
                        <li>  <Image width={20}  src={facebook} alt='facebook' /> </li>
                        <li> <Image width={20}  src={mail} alt='mail' /> </li>
                        <li> <Image width={20}  src={twitter} alt='twitter' /></li>
                        <li> <Image width={20}  src={ig} alt='instagram' /></li>
                    </ul>
                </li>
                <Image width={20}  src={search} alt='search' />
             </ul>
        </div>
    </div>
    </div>
  )
}

export default NAV