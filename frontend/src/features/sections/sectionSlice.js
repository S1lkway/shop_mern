import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import sectionService from './sectionService'

const initialState = {
  sections: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

//* MENU SECTIONS ***********************************************************//

//* CREATE NEW MENU SECTION
export const createMenuSection = createAsyncThunk(
  'menu_sections/create',
  async (menuSectionData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await sectionService.createMenuSection(menuSectionData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//* GET MENU SECTIONS
export const getMenuSections = createAsyncThunk(
  'menu_sections',
  async (_, thunkAPI) => {
    try {
      return await sectionService.getMenuSections();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

//* GROUPS ******************************************************************//


//* ARTICLESLICE
export const menuSectionsSlice = createSlice({
  name: 'menuSections',
  initialState,
  reducers: {
    resetMenuSections: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      /// createArticles
      .addCase(createMenuSection.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createMenuSection.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sections.push(action.payload)
      })
      .addCase(createMenuSection.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      /// getMenuSections
      .addCase(getMenuSections.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMenuSections.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.sections = action.payload
      })
      .addCase(getMenuSections.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { resetMenuSections } = menuSectionsSlice.actions
export default menuSectionsSlice.reducer