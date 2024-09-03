import type { DirectiveBinding } from 'vue'

const lazyLoadDirective = {
  mounted(el: HTMLImageElement, binding: DirectiveBinding) {
    const loadImage = () => {
      const img = new Image()
      img.src = binding.value as string // 获取绑定的图片 URL
      img.onload = () => {
        el.src = binding.value as string // 设置 img 的 src 属性
        el.classList.add('loaded') // 可选：添加加载完成的样式
      }
      img.onerror = () => {
        el.src = '' // 加载失败时的占位图
      }
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage() // 当元素进入视口时加载图片
          observer.unobserve(el) // 加载后停止观察
        }
      })
    })

    observer.observe(el) // 开始观察元素
  },
}
export default lazyLoadDirective
