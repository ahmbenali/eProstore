import {EllipsisVertical, ShoppingCart, UserIcon} from 'lucide-react'
import Link from 'next/link'
import {Button} from '~/components/ui/button'
import {
  SheetContent as Content,
  Sheet,
  SheetTitle as Title,
  SheetTrigger as Trigger
} from '~/components/ui/sheet'
import ModeToggle from './mode-toggle'

function Menu() {
  return (
    <>
      <div className=''>
        {/* desktop nav */}
        <nav className='md:flex hidden w-full max-w-xs gap-1'>
          <NavItems />
        </nav>

        {/* mobile nav */}
        <nav className='md:hidden'>
          <Sheet>
            <Trigger className='align-middle'>
              <EllipsisVertical />
            </Trigger>
            <Content className='flexCol items-start'>
              <Title>Menu</Title>
              <NavItems />
            </Content>
          </Sheet>
        </nav>
      </div>
    </>
  )
}

export default Menu

function NavItems() {
  return (
    <>
      <ModeToggle />
      <Button asChild variant='ghost'>
        <Link href='/cart'>
          <ShoppingCart />
          Cart
        </Link>
      </Button>
      <Button asChild variant='secondary'>
        <Link href='/sign-in'>
          <UserIcon />
          Sign In
        </Link>
      </Button>
    </>
  )
}
