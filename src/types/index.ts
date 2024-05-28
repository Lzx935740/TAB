export interface responseType<T = any> {
  code: number
  msg: string
  data: T
  rectangle: string
  status: string
  sysTime2: string
  result: T
  trafficinfo: T
}

export interface LiveDataType {
  body_temperature: number | null
  pneumatic: number | null
  relative_humidity: number
  directional_of_wink: string
  Ultraviolet: string
  wind_power: number | null
}

export interface newsTitleListType {
  source: string
  title: string
  newsId: number
}

export interface newsParticularType {
  title: string
  details: { type: string; content: string; imageUrl: string; videoUrl: string }
}
