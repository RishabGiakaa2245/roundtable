import React from 'react'

const Loader = () => {
  return (
    <>

    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
    </div>
    </>
  )
}

export default Loader