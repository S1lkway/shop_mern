import axios from 'axios'

const API_URL = '/api/menu_sections'

//* GET MENU SECTIONS
const getMenuSections = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

//* CREATE MENU SECTION
const createMenuSection = async (menuSectionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL, menuSectionData, config)
  return response.data
}

//* EDIT MENU SECTION
const editMenuSection = async (menuSectionData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const URL = API_URL + '/' + menuSectionData.sectionId
  const response = await axios.put(URL, menuSectionData, config)
  return response.data
}

//* DELETE MENU SECTION
const deleteMenuSection = async (sectionId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const URL = API_URL + '/' + sectionId
  const response = await axios.delete(URL, config)
  return response.data
}

const sectionService = {
  getMenuSections,
  createMenuSection,
  editMenuSection,
  deleteMenuSection,
}



export default sectionService