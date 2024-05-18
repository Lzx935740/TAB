import request from '@/utils/request'

// 读者登录接口
export const readerLoginService = ({
  username,
  password
}: {
  username: string
  password: string
}) => {
  return request<{ token: string }>({
    url: '/login/readerLogin',
    method: 'post',
    data: { username, password }
  })
}
