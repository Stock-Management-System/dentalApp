import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../../../components/polyclinic/Container'
import Layout from '../../../components/polyclinic/Layout'
import "./polyclinicProfile.scss"

const PolyclinicProfile = () => {
  const open = useSelector(state => state.open.value)
  return (<>
    <Layout />

<div
  className="absolute bg-container  mt-20 right-0 p-6 min-h-[calc(100vh-80px)]"
  style={{ width: open ? 'calc(100% - 250px)' : 'calc(100% - 100px)' }}
>
  <div className="bg-white">policlinc</div>
</div>

  </>
  )
}

export default PolyclinicProfile