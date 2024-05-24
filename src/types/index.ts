export interface LiveDataType {
  body_temperature: Number | null
  pneumatic: Number | null
  relative_humidity: Number | null
  directional_of_wink: String
  Ultraviolet: String
  wind_power: Number | null
}

export interface newsTitleListType {
  source: String
  title: String
  newsId: Number
}

export interface newsParticularType {
  title: String
  details: { type: String; content: String; imageUrl: String; videoUrl: String }
}
