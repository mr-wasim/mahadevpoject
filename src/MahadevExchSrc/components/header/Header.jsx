import React from 'react'
import LoginBar from './headerComponents/LoginBar'
import NewsStrip from './headerComponents/NewsStrip'
import MatchStrip from './headerComponents/MatchStrip'
import TopNav from './headerComponents/TopNav'
import SecondaryNav from './headerComponents/SecondaryNav'

const Header = () => {
  return (
   <>
    <LoginBar/>
    <NewsStrip/>
    <MatchStrip/>
    <div className='w-[100%] bg-white h-1'></div>
    <TopNav/>
    <SecondaryNav/>
   </>
  )
}

export default Header