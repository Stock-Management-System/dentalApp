import React, { useState } from 'react'
import Layout from './Layout'

const Container = () => {
  const [open, setOpen] = useState(true)
  return (
  <div>

<Layout />

<div
  className="absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)]"
  style={{ width: open ? 'calc(100% - 250px)' : 'calc(100% - 100px)' }}
>
  <div className="bg-white"></div>
</div>

  </div>
  )
}

export default Container