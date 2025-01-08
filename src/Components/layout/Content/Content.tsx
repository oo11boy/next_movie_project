import React from 'react'
import SideBar from './SideBar/SideBar'
import SideMain from './SideMain'

export default function Content() {
  return (
    <div className='global-w flex flex-col-reverse lg:flex-row gap-4 justify-between'>
        <SideBar/>
        <SideMain/>
        
    </div>
  )
}
