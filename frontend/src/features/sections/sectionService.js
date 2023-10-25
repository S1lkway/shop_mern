import axios from 'axios'

const API_URL = '/api/menu_sections'

//* GET MENU SECTIONS
const getMenuSections = async (token) => {
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

//* GET ONE MENU SECTION
const getMenuSection = async (id, token) => {
}

//* EDIT MENU SECTION
const editMenuSection = async (sectionData, token) => {
}

//* DELETE MENU SECTION
const deleteMenuSection = async (sectionId, token) => {
}

const sectionService = {
  getMenuSections,
  createMenuSection,
  getMenuSection,
  editMenuSection,
  deleteMenuSection,
}



export default sectionService