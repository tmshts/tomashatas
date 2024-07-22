import axios from 'axios'
const baseUrl = '/api/projects'

const getAll = () => {
  const returnedData = axios
    .get(baseUrl)
    .then((response) => response.data)

  return returnedData
}

const addComment = async (content) => {
  const { comment, project_id } = content

  const comment_content = {
    content: comment
  }
  const response = await axios.post(`${baseUrl}/${project_id}/comments`, comment_content)
  return response.data
}


const getAllComments = async (project_ID) => {
  try {
    const response = await axios.get(`${baseUrl}/${project_ID}/comments`)
    return response.data
  }
  catch(exception) {
    return { error_message: 'no comments' }
  }
}


const updateVotes = async (updatedProjectObject) => {

  const response = await axios.put(`${baseUrl}/${updatedProjectObject.ID}`, updatedProjectObject)

  return response.data
}

export default { getAll, updateVotes, getAllComments, addComment }
