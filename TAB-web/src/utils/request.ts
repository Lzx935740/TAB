import axios, { type AxiosRequestConfig } from 'axios'
import { type responseType } from '@/types'

const baseURL = '/api'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})

const request = async <T = any>(
  config: AxiosRequestConfig
): Promise<responseType<T>> => {
  const { data } = await instance.request<responseType<T>>(config)
  // data.code === 1 || data.status === 'ok' || data.status === '1'
  //   ? console.log(data.msg) // 成功消息提示
  //   : console.error(data.msg) // 失败消息提示
  return data
}

export default request
export { baseURL }
