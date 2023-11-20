import axios from 'axios'

/// /api/menu_sections/:id/groups/:groupId
const API_URL_START = '/api/menu_sections/'

//* CREATE SECTION GROUP
const createSectionGroup = async (groupData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const URL = API_URL_START + groupData.sectionId + '/groups'
  const response = await axios.post(URL, groupData, config)
  return response.data
}

//* EDIT SECTION GROUP
const editSectionGroup = async (groupData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const URL = API_URL_START + groupData.sectionId + '/groups/' + groupData.groupId
  const response = await axios.put(URL, groupData, config)
  return response.data
}

//* DELETE SECTION GROUP
const deleteSectionGroup = async (groupData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const URL = API_URL_START + groupData.sectionId + '/groups/' + groupData.groupId
  const response = await axios.delete(URL, config)
  return response.data
}

const groupService = {
  createSectionGroup,
  editSectionGroup,
  deleteSectionGroup,
}



export default groupService