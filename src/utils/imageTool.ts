// import { importAsyncFiles } from 'src/ownerInfo/index'

export const getImgUrl = (path: string) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}

// export const getUserInfoFilie = async () => {
//   const userInfo = ref<Info>()
//   const userInfo.value = await importAsyncFiles()
//   return userInfo
// }
