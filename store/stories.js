import { createStore } from "redux"

import stories1 from "../src/assets/stories1.json"

function counter(state = stories1, action) {
  switch (action.type) {
    case "ADD_STORY":
      const response = state
      response.push({ ...action.payload })
      return response
    case "POP_STORY":
    //   return state - 1
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

export default store
