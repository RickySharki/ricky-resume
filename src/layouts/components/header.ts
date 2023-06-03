import { ElAvatar, ElButton } from 'element-plus'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@store/mouldes/theme'
import { storeToRefs } from 'pinia'
export default defineComponent({
  name: 'TabsHeader',
  setup: () => {
    const themeStore = useThemeStore()
    const { isDark } = storeToRefs(themeStore)
    const router = useRouter()
    const tabs = [{
      name: '首页',
      route: '/Home',
    },
    {
      name: '简历',
      route: '/Resume',
    },
    {
      name: '文章',
      route: '/Text',
    },
    ]
    const onChangeRoute = (route: string) => {
      router.push(route)
    }
    const onChangeTheme = () => {
      themeStore.toggleDark()
    }
    const iconTempalte = computed(() => isDark.value ? 'Sunny' : 'Moon')
    return {
      tabs,
      onChangeRoute,
      onChangeTheme,
      iconTempalte,
    }
  },
  render() {
    return h('div', {
      class: ['resume-header', 'w-full', 'justify-between', 'mt-10'],
    }, [
      h(ElAvatar, { class: ['ml-10'], src: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png' }),
      h('div', {
        class: ['header-tabs', 'flex', 'justify-around', 'items-center'],
      },
      this.tabs.map((item) => {
        return h('div',
          {
            class: ['tabs-item'],
            // on: {
            //   click: () => this.push(item.route),
            // },
            onClick: () => this.onChangeRoute(item.route),
          }, item.name)
      }),
      ),
      h(ElButton, { class: ['mr-10'], icon: this.iconTempalte, circle: true, size: 'large', onClick: () => this.onChangeTheme() }),
    ])
  },
})
