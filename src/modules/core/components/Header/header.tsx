import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/modules/core/ui/button'

const Header = () => {
  return (
    <div className='Header'>
      <div className='container'>
        <div className="column">
          <Link href='/'>
            <Image
              alt='Logo Berry'
              height={25}
              src={'/Logo.svg'}
              width={115}
            />
          </Link>
          <div className="networks">
            <Link href='./'>
              <Image
                alt='l'
                height={20}
                src={'/i.png'}
                width={20}
              />
            </Link>
            <Link href='./'>
              <Image
                alt='linkedin'
                height={20}
                src={'/Linkedin.svg'}
                width={20}
              />
            </Link>
            <Link href='./'>
              <Image
                alt='l'
                height={20}
                src={'/face.png'}
                width={20}
              />
            </Link>
          </div>
        </div>
        <Button variant={'link'}>Ingreso para Agentes</Button>
      </div>
    </div>
  )
}

export default Header