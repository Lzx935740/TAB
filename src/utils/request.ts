import axios, { type AxiosRequestConfig } from 'axios'
import { type MyResponseType } from '@/types'

const baseURL = '/api'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
  baseURL,
  timeout: 10000
})

const request = async <T = any>(
  config: AxiosRequestConfig
): Promise<MyResponseType<T>> => {
  const { data } = await instance.request<MyResponseType<T>>(config)
  data.code === 0
    ? console.log(data.msg) // 成功消息提示
    : console.error(data.msg) // 失败消息提示
  return data
}

export default request
export { baseURL }
