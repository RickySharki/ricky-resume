export interface LoginForm {
  userName: string
  passWord: string
}

export interface Info {
  mainInfo: MainInfo
  resume: Resume
  article: Article[]
  imageList: ImageList[]
}

export interface MainInfo {
  avatar: string
  url: string
  desc: string
  githubImg: string
  emailUrl: string
  juejinUrl: string
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
  projects: Experience[]
}

export interface UserInfo {
  name: string
  workYear: string
  school: string
  email: string
  phone: string
  github: string
}

export interface Experience {
  company: string
  time: string
  content: Content[]
}

interface Content {
  title: string
  content: string
}
