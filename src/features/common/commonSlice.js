import { createSlice } from "@reduxjs/toolkit";

const color = localStorage.color ? localStorage.color : "#d60000";

const initialState = {
  activeMenu:true,
  iconMenu:true, 
  hideMenu:false,
  themeSettings:false,
  navItemColorDark:"#fff",
  navItemColorLight:"#333",
  currentColor: color,
  modeOption : "light",
  screenSize : 0,
  notificationOption:false,
  searchInput:"",
  searchCard : false, 
  limit:20,
  limitArray: [10, 20, 30, 50, 100]
}







export const commonSlice = createSlice({
  name:"common",
  initialState:initialState,
  reducers:{
    // --- ==============================
    sideberMouseEnter:(state) => {
      state.iconMenu = false;
    },

    // ---
    sideberMouseLeave:(state) => {
      state.iconMenu = true;
    },

    // ---
    hideMenuTrue:(state) => {
      state.hideMenu = true;
    },

    // --- ==============================
    hideMenuFalse:(state) => {
      state.hideMenu = false;
    },

    // ---
    hideMenuToggle:(state) => {
      state.hideMenu = !state.hideMenu;
    },

    // ---  ============================
    activeMenuTrue:(state) => {
      state.activeMenu = true;
    },

    // ---
    activeMenuFalse:(state) => {
      state.activeMenu = false;
    },

    // ---
    activeMenuToggle:(state) => {
      state.activeMenu = !state.activeMenu;
    },

    // ---  ============================
    themeSettingsTrue:(state) => {
      state.themeSettings = true;
    },

    // ---
    themeSettingsFalse:(state) => {
      state.themeSettings = false;
    },

    // ---
    themeSettingsToggle:(state) => {
      state.themeSettings = !state.themeSettings;
    },

    // --- ===============================
   setModeOption:(state, action)=>{
    state.modeOption = action.payload
   },
   setCurrentColor:(state, action)=>{
    state.currentColor = action.payload
   },
   setScreenSize:(state, action)=>{
    state.screenSize = action.payload
   },
   setSearchInput:(state, action)=>{
    state.searchInput = action.payload
   },
   setSearchCard:(state, action)=>{
    state.searchCard = action.payload
   },
   setLimit:(state, action)=>{
    state.limit = action.payload
   },
  }
});


export const { 
  sideberMouseEnter, sideberMouseLeave, 
  hideMenuTrue, hideMenuFalse, hideMenuToggle, 
  activeMenuTrue, activeMenuFalse, activeMenuToggle, 
  themeSettingsTrue, themeSettingsFalse, themeSettingsToggle,
  setCurrentColor, setScreenSize, setSearchInput, setSearchCard, setModeOption,setLimit


} = commonSlice.actions;


export default commonSlice.reducer; 