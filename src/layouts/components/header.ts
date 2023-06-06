import { ElAvatar, ElButton } from 'element-plus'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@store/mouldes/theme'
import { storeToRefs } from 'pinia'
import { useEventListener } from '@vueuse/core'
// import { getEnv } from '@utils/getEnv'

// const {VITE_USER_INFO} = getEnv()
import auth from '../../assets/ricky/Rick_Auth.jpg'
// const auth = await import(`${}`)

export default defineComponent({
  name: 'TabsHeader',
  setup: () => {
    const avatarEl = ref<HTMLElement | null>(null)
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

    useEventListener(window, 'wheel', (e) => {
      console.log('🚀 ~ file: header.ts:51 ~ useEventListener ~ e:', e)
      const isScrollingDown = (e as any).wheelDeltaY < 0
      // 根据滚轮滚动的方向调整元素的CSS属性
      const scale = isScrollingDown ? 1 : 1.5
      const down = isScrollingDown ? 0 : 5
      avatarEl.value!.$el.style.transform = `translate3d(-0.222222rem, ${down}rem, 0px) scale(${scale})`
    })
    return {
      tabs,
      onChangeRoute,
      onChangeTheme,
      iconTempalte,
      auth,
      avatarEl,
    }
  },
  render() {
    return h('div', {
      class: ['resume-header', 'w-full', 'justify-between', 'mt-10'],
    }, [
      h(ElAvatar, { id: 'my-avatar', class: ['ml-10'], src: this.auth, ref: 'avatarEl' }),
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
