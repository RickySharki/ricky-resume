export interface LoginForm {
  userName: string
  passWord: string
}

export interface Info {
  avatar: string
  url: string
  desc: string
  resume: Resume
  article: Article[]
  imageList: ImageList[]
}

export interface ImageList {
  id: number
  path: string
}

export interface Article {
  title: string
  desc: string
  img: string
  url: string
}

export interface Resume {
  userInfo: UserInfo
  skills: string[]
  projects: string[]
}

export interface UserInfo {
  name: string
  workYear: string
  school: string
  email: string
  phone: string
  github: string
}
