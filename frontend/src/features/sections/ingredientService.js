import axios from 'axios'

/// /api/menu_sections/:id/groups/:groupId/ingredients/:ingredietId
const API_URL_START = '/api/menu_sections/'

//* CREATE INGREDIENT
const createIngredient = async (ingredientData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const sectionId = ingredientData.get('sectionId')
  const groupId = ingredientData.get('groupId')
  const URL = API_URL_START + sectionId + '/groups/' + groupId + '/ingredients'
  const response = await axios.post(URL, ingredientData, config)
  return response.data
}

//* EDIT INGREDIENT
const editIngredient = async (ingredientData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const URL = API_URL_START + ingredientData.sectionId + '/groups/' + ingredientData.groupId
  const response = await axios.put(URL, ingredientData, config)
  return response.data
}

//* DELETE INGREDIENT
const deleteIngredient = async (ingredientData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const URL = API_URL_START + ingredientData.sectionId + '/groups/' + ingredientData.groupId + '/ingredients/' + ingredientData.ingredientId

  const response = await axios.delete(URL, config)
  return response.data
}

const groupService = {
  createIngredient,
  editIngredient,
  deleteIngredient,
}



export default groupService