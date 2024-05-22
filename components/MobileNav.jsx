import { AlignJustify } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Logo from './Logo'
import Nav from './Nav'
import Socials from './Socials'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
       <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col justify-between h-full items-center py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav containerStyles='flex flex-col items-center gap-y-6' linkStyles='text-xl relative hover:text-primary transition-all' underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full' />
          </div>
          <Socials containerStyles='flex gap-x-4' iconStyles='text-2xl' />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
