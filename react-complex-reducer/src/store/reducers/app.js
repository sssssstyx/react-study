import * as types from '../action-types'

const initState = {
    sidebarCollapsed: false,
    settingPanelVisible: false
}
export default function app(state = initState, action) {
    switch(action.type) {
        case types.SET_APP_SIDEBAR_CLOOAPSED:
            return {
                ...state,
                sidebarCollapsed: !state.sidebarCollapsed
            }
        default:
            return state
    }
}