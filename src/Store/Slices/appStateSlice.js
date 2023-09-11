import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    toggleSidebarWidth : false,
}
const appStateSlice = createSlice({
    name:'appState',
    initialState,
    reducers:{
    // add slices reducers
    toggleSidebar : (state) => {
        state.toggleSidebarWidth = !state.toggleSidebarWidth
    }    
    }
})

export const {toggleSidebar} = appStateSlice.actions
export default appStateSlice.reducer