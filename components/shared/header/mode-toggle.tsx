'use client';

import { useTheme } from 'next-themes';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem as CheckboxItem ,
  DropdownMenuContent as Content,
  DropdownMenuLabel as Label,
  DropdownMenuSeparator as Separator,
  DropdownMenuTrigger as Trigger,
} from '~/components/ui/dropdown-menu';
import { MoonIcon, SunIcon, SunMoon } from 'lucide-react';

function ModeToggle() {
  const {theme, setTheme} = useTheme()

const ThemeIcon = () =>
  theme === 'system' ? (
    <SunMoon />
  ) : theme === 'dark' ? (
    <MoonIcon />
  ) : (
    <SunIcon />
  )
  
const ThemeBoxItem = ({label, mode}: {label: string; mode: string}) =>
  <CheckboxItem
    checked={theme === mode}
    onClick={() => setTheme(mode)}
  >
    {label}
  </CheckboxItem>


  return (
    <DropdownMenu>
      <Trigger asChild>
        <Button
          variant='ghost'
          className='focus-visible:ring-0 focus-visible:ring-offset-0'
        >
          <ThemeIcon />
        </Button>
      </Trigger>

      <Content>
        <Label>Appearance</Label>
        <Separator />

        <ThemeBoxItem label='Light' mode='light' />
        <ThemeBoxItem label='Dark' mode='dark' />
        <ThemeBoxItem label='System' mode='system' />

        {/* <CheckboxItem
          checked={theme === 'light'}
          onClick={() => setTheme('light')}
        >
          Light
        </CheckboxItem>
        <CheckboxItem
          checked={theme === 'dark'}
          onClick={() => setTheme('dark')}
        >
          Dark
        </CheckboxItem>
        <CheckboxItem
          checked={theme === 'system'}
          onClick={() => setTheme('system')}
        >
          System
        </CheckboxItem> */}
      </Content>
    </DropdownMenu>
  )
}

export default ModeToggle
