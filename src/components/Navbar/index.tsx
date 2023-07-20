import Image from 'next/image'

import React from 'react'
import Link from '../Link'

export default function Navbar() {
  return (
        <nav className='bg-slate-400 flex justify-around items-center'>
            <div> 
                <ul className='list-none flex'>
                    <li className='p-5'>
                        <Link href='/' textAnchor='Home' />
                    </li>
                    <li className='p-5'>
                        <Link href='/pokemon' textAnchor='Pokemon' />
                    </li>
                    <li className='p-5'>
                        <Link href='/#' textAnchor='Sobre o projeto'/>
                    </li>
                </ul>
            </div>
            {/* Menu */}
            <div>
                <Image src='/logo.svg' width={100} height={100} alt='Imagem do logo' />
            </div>
        </nav>
    )
}
