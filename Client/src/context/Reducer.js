import { DISPLAY_ALERT } from "./Action"


const Reducer = (state,action) => {
  if(action.type === DISPLAY_ALERT){
    return {...state,showAlert:true,
      alertType:'danger',
      alertText:'Please provide all values'
    }
  }
  throw new Error (`no such action: ${action.type}`)
}

export default Reducer
