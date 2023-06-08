export const getImgUrl = (path: string) => {
  console.log("🚀 ~ file: imageTool.ts:2 ~ getImgUrl ~ path:", path)
  return new URL(`../assets/${path}`, import.meta.url).href
}
