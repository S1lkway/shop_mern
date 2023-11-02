import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import sectionService from './sectionService'

const initialState = {
  sections: [],
  sectionsIsError: false,
  sectionsIsSuccess: false,
  sectionsIsLoading: false,
  sectionsMessage: '',
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

//* EDIT MENU SECTION
export const editMenuSection = createAsyncThunk(
  'menu_sections/edit',
  async (menuSectionData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await sectionService.editMenuSection(menuSectionData, token);
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


//* SECTIONSLICE
export const menuSectionsSlice = createSlice({
  name: 'menuSections',
  initialState,
  reducers: {
    resetMenuSections: (state) => {
      state.sectionsIsLoading = false
      state.sectionsIsSuccess = false
      state.sectionsIsError = false
      state.sectionsMessage = ''
    }
  },
  extraReducers: (builder) => {
    builder
      /// createSection
      .addCase(createMenuSection.pending, (state) => {
        state.sectionsIsLoading = true
      })
      .addCase(createMenuSection.fulfilled, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsSuccess = true
        state.sections.push(action.payload)
      })
      .addCase(createMenuSection.rejected, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsError = true
        state.sectionsMessage = action.payload
      })
      /// getMenuSections
      .addCase(getMenuSections.pending, (state) => {
        state.sectionsIsLoading = true
      })
      .addCase(getMenuSections.fulfilled, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsSuccess = true
        state.sections = action.payload
      })
      .addCase(getMenuSections.rejected, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsError = true
        state.sectionsMessage = action.payload
      })
      /// editSection
      .addCase(editMenuSection.pending, (state) => {
        state.sectionsIsLoading = true
      })
      .addCase(editMenuSection.fulfilled, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsSuccess = true

        const index = state.sections.findIndex((section) => section._id === action.payload._id)
        if (index !== -1) {
          state.sections[index] = action.payload
        }
      })
      .addCase(editMenuSection.rejected, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsError = true
        state.sectionsMessage = action.payload
      })
  },
})

export const { resetMenuSections } = menuSectionsSlice.actions
export default menuSectionsSlice.reducer