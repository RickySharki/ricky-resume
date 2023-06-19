export const usePageTitle = (pageName: string) => {
  const title = useTitle()
  title.value = `${pageName} | Resume`
}
