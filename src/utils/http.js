import axios from 'axios'

const axiosCus = axios.create({
  baseURL: 'http://thanhvan.local/api/'
})

export default {
  axiosCus
}
