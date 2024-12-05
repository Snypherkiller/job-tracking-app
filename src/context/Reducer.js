import React from 'react'

const Reducer = (state,action) => {
  throw new Error (`no such action: ${action.type}`)
}

export default Reducer
