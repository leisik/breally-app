import axios from 'axios'
import { BASIC_AUTH } from '@/config'

export const getOnePage = async (id: string) => {
  const url = `https://adchitects-cms.herokuapp.com/page/${id}`
  const headers = {
    Authorization: `Basic ${BASIC_AUTH}`,
  }

  const response = await axios.get(url, {
    headers,
    maxBodyLength: Infinity,
  })
  return response
}
