import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../UI/Header/Header'

export default function MainLayout() {
  return (
    <div>
        <Header />

        <div className="w-full min-h-screen pt-[100px] bg-[#F6F6F6] px-[10%]">
            <Outlet />
        </div>
    </div>
  )
}
