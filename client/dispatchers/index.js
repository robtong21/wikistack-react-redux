import axios from 'axios'
import { add, fetch } from '../actions'

export const addPage = newPage => dispatch => {
  axios.post('/api/wiki', newPage)
  .then(res => dispatch(add(res.data)))
  // .catch(err => console.error(`Creating Wiki page: ${newPage} unsuccessful`, err))
}

export const getPages = () => dispatch => {
  axios.get('/api/wiki')
  .then(res => dispatch(fetch(res.data)))
  .catch(err => console.error('Fetching Wiki pages unsuccessful', err))
}
