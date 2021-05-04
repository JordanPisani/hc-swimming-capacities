import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.airtable.com/v0/app04gpmKMySbcl3B',
  // commbocc@gmail.com account read only api key
  headers: { Authorization: `Bearer key1XrFuYhG1GKHvu` },
})
