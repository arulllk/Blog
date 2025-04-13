import React from 'react'

const SuccessErrorMessage = ({messageType,message}) => {
  console.log('messageType ' , messageType ,  ' message ' , message);
  return (
    <p className={`${messageType === 'success' ?  `bg-[#d4edda] text-[#155724] `: `bg-[#f8d7da] text-[#721c24] `}fixed top-0 left-0 w-full min-h-14 z-[999999999] flex items-center justify-center text-sm`} >{message}</p>
  )
}

export default SuccessErrorMessage