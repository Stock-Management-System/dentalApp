import React from 'react'
import { useState } from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'

const Layout = () => {
const [open, setOpen] = useState(false)
  return (
    <div>
        <NavBar open={open} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
    </div>
  )
}

export default Layout