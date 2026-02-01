import React from 'react'

export const ScorebordTitleHeading = () => {
  return (
    <div className="hidden md:flex items-center bg-[#efefef]  border-b border-[rgb(126,151,167)] text-[13px] font-semibold text-black">
          <div className="md:w-6/12 px-3 py-2" />
          <div className="md:w-5/12 grid grid-cols-6 gap-[2px] text-center">
            <div>Matched</div>
            <div>2</div>
            <div>x</div>
            <div>1</div>
            <div />
            <div />
          </div>
          <div className="md:w-1/12" />
        </div>
  )
}
