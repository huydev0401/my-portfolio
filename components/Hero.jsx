import Link from 'next/link'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'

import {
  RiArrowDownSLine
} from 'react-icons/ri'

import DevImg from './DevImg'
import Socials from './Socials'

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-cover bg-no-repeat bg-bottom dark:bg-none'>
      <div className="container mx-auto">
        <div className='flex justify-between gap-x-8'>
          <div className='flex max-w-[750px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Font-end Developer</div>
            <h1 className='h1 mb-4'>Hello, I'm Huy Nguyen</h1>
            <p className='subtitle max-w-490px mx-auto xl:mx-0'>A passionate Front-end Developer based in Ho Chi Minh City, Viet Nam 😊</p>
            <div className='flex xl:flex-row flex-col gap-x-3 gap-y-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2'>Contact me <Send size={18} /></Button>
              </Link>
              <Link href='#'>
                <Button variant='secondary' className='gap-x-2'>Download CV <Download size={18} /></Button>
              </Link>
            </div>
            <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-3xl hover:text-primary transition-all' />
          </div>
          <div className='hidden xl:flex relative'>
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-14 -right-8'></div>
            <DevImg containerStyles='bg-hero-shape w-[500px] h-[450px] bg-no-repeat relative bg-bottom -top-14' imgSrc='/hero/developer.png' />
          </div>
        </div>
        <div className='hidden xl:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-primary text-3xl' />
        </div>
      </div>
    </section>
  )
}

export default Hero