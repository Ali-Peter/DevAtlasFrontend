import React, { useEffect } from 'react'

const Loading = () => {
  return (
    <>
      <div class="flex justify-center items-center h-screen ">
        <div class="absolute animate-spin w-32 h-32 bg-white border-[40px] border-l-[#0603A5] border-r-[#6C03A5] border-t-[#A5031C] border-b-[#6CA503] rounded-full lazyload blur-sm"></div>
      </div>
    </>
  )
}

export default Loading