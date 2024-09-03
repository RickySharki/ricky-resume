// src/utils/imageWorker.ts

self.onmessage = async (event) => { // Make the function async
  const imageList = event.data
  const { getImgUrl } = await import('@utils/imageTool') // Await the import
  // 进行一些计算，例如将图像路径转换为完整 URL
  const result = imageList.map((item: { path: string }) => {
    return { ...item, image: getImgUrl(item.path) }
  })
  self.postMessage(result)
}
