import isLoginReducer from "./isLogin"
import { combineReducers } from "redux"

const allReducers = combineReducers({
  isLoginReducer,
  // Thêm các reducer phía dưới này
})

export default allReducers;