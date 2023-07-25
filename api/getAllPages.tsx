import axios from 'axios'
import { BASIC_AUTH } from '@/config'

export const getAllPages = async () => {
  const url = 'https://adchitects-cms.herokuapp.com/pages'
  const headers = {
    Authorization: `Basic ${BASIC_AUTH}`,
  }

  const response = await axios.get(url, {
    headers,
    maxBodyLength: Infinity,
  })
  return response
}
