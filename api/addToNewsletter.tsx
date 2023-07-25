import axios from 'axios'
import { BASIC_AUTH } from '@/config'

export const addToNewsletter = async (email: string) => {
  const url = 'https://adchitects-cms.herokuapp.com/newsletter'
  const headers = {
    Authorization: `Basic ${BASIC_AUTH}`,
    'Content-Type': 'application/json',
  }
  const data = JSON.stringify({
    email: email,
  })

  const response = await axios.post(url, data, {
    headers,
    maxBodyLength: Infinity,
  })
  return response
}
