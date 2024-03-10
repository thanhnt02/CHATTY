const isLoginReducer = (state = true, action) => {
  switch (action.type) {
    case "SUCCESS":
      console.log("Được");
      return true;
    case "FAIL":
      return false;
    default:
      return state;
  }
}

export default isLoginReducer;