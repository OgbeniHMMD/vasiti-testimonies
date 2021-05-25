import { createStore } from "redux"

import JSON_FILE from "../src/assets/stories1.json"

function storyReducer(state = JSON_FILE, action) {
  switch (action.type) {
    case "ADD_STORY":
      return state.concat([action.payload])

    case "POP_STORY":
    //   return state - 1

    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(storyReducer)

export default store
