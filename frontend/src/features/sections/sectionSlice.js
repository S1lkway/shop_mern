import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import sectionService from './sectionService'
import groupService from './groupService'
import ingredientService from './ingredientService'

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

//* CREATE NEW SECTION GROUP
export const createSectionGroup = createAsyncThunk(
  'menu_sections/groups',
  async (groupData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await groupService.createSectionGroup(groupData, token);
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

//* EDIT GROUP
export const editSectionGroup = createAsyncThunk(
  'menu_sections/groups/edit',
  async (groupData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await groupService.editSectionGroup(groupData, token);
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


//* INGREDIENTS *************************************************************//
//* CREATE NEW INGREDIENT
export const createIngredient = createAsyncThunk(
  'menu_sections/ingredients',
  async (ingredientData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await ingredientService.createIngredient(ingredientData, token);
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

//* DELETE INGREDIENT
export const deleteIngredient = createAsyncThunk(
  'menu_sections/ingredients/delete',
  async (ingredientData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await ingredientService.deleteIngredient(ingredientData, token);
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


///////////////////////////////////////////////////////////////////////////////
//* SECTIONSLICE */////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
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

      /// createSectionGroup
      .addCase(createSectionGroup.pending, (state) => {
        state.sectionsIsLoading = true
      })
      .addCase(createSectionGroup.fulfilled, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsSuccess = true
        const index = state.sections.findIndex((section) => section._id === action.payload._id)
        if (index !== -1) {
          state.sections[index] = action.payload
        }
      })
      .addCase(createSectionGroup.rejected, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsError = true
        state.sectionsMessage = action.payload
      })
      /// editSectionGroup
      .addCase(editSectionGroup.pending, (state) => {
        state.sectionsIsLoading = true
      })
      .addCase(editSectionGroup.fulfilled, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsSuccess = true

        const index = state.sections.findIndex((section) => section._id === action.payload._id)
        if (index !== -1) {
          state.sections[index] = action.payload
        }
      })
      .addCase(editSectionGroup.rejected, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsError = true
        state.sectionsMessage = action.payload
      })
      /// createIngredient
      .addCase(createIngredient.pending, (state) => {
        state.sectionsIsLoading = true
      })
      .addCase(createIngredient.fulfilled, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsSuccess = true
        const index = state.sections.findIndex((section) => section._id === action.payload._id)
        if (index !== -1) {
          state.sections[index] = action.payload
        }
      })
      .addCase(createIngredient.rejected, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsError = true
        state.sectionsMessage = action.payload
      })
      /// deleteIngredient
      .addCase(deleteIngredient.pending, (state) => {
        state.sectionsIsLoading = true
      })
      .addCase(deleteIngredient.fulfilled, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsSuccess = true
        const index = state.sections.findIndex((section) => section._id === action.payload._id)
        if (index !== -1) {
          state.sections[index] = action.payload
        }
      })
      .addCase(deleteIngredient.rejected, (state, action) => {
        state.sectionsIsLoading = false
        state.sectionsIsError = true
        state.sectionsMessage = action.payload
      })
  },
})

export const { resetMenuSections } = menuSectionsSlice.actions
export default menuSectionsSlice.reducer