import React, { useState } from 'react'

const Container = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className="absolute   h-screen w-96 mt-20 right-0 p-10" style={{width: open ? 'calc(100% - 267px)' : 'calc(100% - 117px)'}}></div>
  )
}

export default Container