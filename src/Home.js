import React, { useEffect, useState } from 'react'
import MainLayout from './layout/MainLayout'

function Home() {
  return (
    <MainLayout>
      <div>Hello {location.state.id} and welcome to DINGA</div>
    </MainLayout>
  )
}

export default Home
