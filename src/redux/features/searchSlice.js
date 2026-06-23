import { createSlice } from "@reduxjs/toolkit";

const search = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTabs(state, action) {
      state.activeTab = action.payload;
    },

    setResults(state, action) {
      state.results = action.payload;
       state.loading=false;
    },
    setLoading(state, action) {
      state.loading = true;
      state.error=null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading=false;
    },
    clearResults(state){
        state.reducer=[]
    }
  },
});


export const {setQuery,setActiveTabs,setResults,setLoading,setError}=searchSlice.actions


export default searchSlice.reducer;