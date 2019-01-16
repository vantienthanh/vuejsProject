import axios from 'axios'

const axiosCus = axios.create({
  baseURL: 'http://localhost/api/'
})

export default {
  axiosCus
}
