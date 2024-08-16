"use client"
import Link from 'next/link'
import React from 'react'
import Style from "./link.module.css"
import NavLink from './navLink/navLink'
import { useState } from 'react'
import Image from 'next/image'
import { handleLogout } from '@/lib/action'
import { auth } from '@/lib/auth'
const Links =  ({session}) => {

    const links = [
        {
            title: "Homepage",
            path: '/'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Contact",
            path: '/contact'
        },
        {
            title: "Blog",
            path: '/blog'
        },
    ]

    const [open, setOpen] = useState(false);

    // TEMPORARY

    // const session = await auth();
    const isAdmin = true;

  return (
    <div className={Style.container}>
        <div className={Style.links}>
    {links.map((link)=>(
        <NavLink item={link} key={link.title}/>
    ))}
    {
        session?.user
        ?
         (
            <>
            {session.user?.isAdmin && <NavLink item={{title:"Admin", path:"/admin"}}/> }
           <form action={handleLogout}>
           <button className={Style.logout}>Logout</button>
           </form>
            </>
        )
        :
        <NavLink item={{title:"Login", path:"/login"}}/>
    }
    </div>
   
    <Image src="/menu.png" width={30} height={30} className={Style.menuButton} onClick={()=>setOpen((prev)=>(!prev)) } />
    {open &&
    (
        <div className={Style.mobileLinks}>
            {links.map((link)=>(
                <NavLink item={link} key={link.title}/>
            ))}
        </div>
    )
    }
    </div>
  )
}

export default Links