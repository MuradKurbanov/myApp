export const SWOH_POP_UP_MANAGER = 'stateCommon/SWOH_POP_UP_MANAGER'

const initialState = {
  popUpManager: false,
};

export const stateCommon = (state = initialState, action) => {
 if (action.type === SWOH_POP_UP_MANAGER) {
    return {
       ...state,
       popUpManager: action.payload
    }
  }
  return state
}

export const showPopUpManager = (bool) => {
  return {
    type: SWOH_POP_UP_MANAGER,
    payload: bool
  }
}
