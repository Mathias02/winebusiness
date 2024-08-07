import { LayoutGridIcon, ShoppingCart, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Header() {
  return (
    <div className='flex items-center justify-between shadow-md'>
      <div className='flex gap-4 items-center'>
        <Image src="/winelogo.jpg" alt='logo' width={150} height={150} />
        
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <h2 className='hidden md:flex cursor-pointer gap-3 border bg-slate-500 text-white p-2 rounded-full px-6'><LayoutGridIcon className='w-7 h-7'/>Category</h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

        <div className='hidden md:flex gap-2 cursor-pointer border p-2 rounded-full'>
          <SearchIcon />
          <input type="text" name='search' placeholder='Search' className='outline-none'/>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <h2 className='flex gap-1 font-medium'><ShoppingCart className='h-7 w-7'/> 0</h2>
         <Button className="bg-primary font-normal" >Login</Button>
      </div>
    </div>
  )
}

export default Header