export const svgFileList = async (isDark: boolean): Promise<any[]> => {
  const iconList = ['vite', 'vscode', 'vue', 'windcss', 'vercel']
  const svgList = await Promise.all(iconList.map(async (iconName) => {
    const svg = await import(`../assets/svg/${isDark ? 'dark' : 'light'}/${iconName}.vue`)
    return svg.default
  }))
  return svgList
}
