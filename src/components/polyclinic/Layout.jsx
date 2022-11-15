import React from 'react'
import { useState } from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import { useSelector, useDispatch } from 'react-redux'
import { sidebarToggle } from '../../features/sidebarSlice'

const Layout = () => {

  const open = useSelector(state => state.open.value)
  const dispatch = useDispatch()


  return (
    <div>
     
      <NavBar  />
      <Sidebar />
    </div>
  )
}

export default Layout
