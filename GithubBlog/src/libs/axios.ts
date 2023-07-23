import axios from 'axios'

export const apiGithub = axios.create({
  baseURL: `https://api.github.com`,
  headers: {
    Authorization: `token ${process.env.NEXT_PUBLIC_TOKEN_USER_AGENT}`,
  },
})
