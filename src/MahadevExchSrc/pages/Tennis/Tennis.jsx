import React, { useEffect } from 'react'
import LeftNave from '../../components/InPlay/LeftNave'
import MiddleSection from '../../components/InPlay/MiddleSection'
import RightSection from "../../components/InPlay/RightSection";


const Tennis = () => {

  

  return (
    <div className="flex justify-center gap-2 mt-2">
      <div className="w-[20%] bg-white h-[100vh]">
        <LeftNave />
      </div>

      <div className="w-[60%]">
        <MiddleSection />
      </div>

      <div className="w-[20%]">
        <RightSection/>
      </div>
    </div>
  )
}

export default Tennis
