import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div>
        <Image src="/winelogo.jpg" alt='logo' width={100} height={100} />
    </div>
  )
}

export default Header