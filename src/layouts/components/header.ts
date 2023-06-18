import { ElButton } from 'element-plus'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@store/mouldes/theme'
import { storeToRefs } from 'pinia'
// import { getEnv } from '@utils/getEnv'

// const {VITE_USER_INFO} = getEnv()
// import auth from '../../assets/ricky/Rick_Auth.jpg'
// const auth = await import(`${}`)

export default defineComponent({
  name: 'TabsHeader',
  setup: () => {
    const avatarEl = ref<HTMLElement | null>(null)
    const themeStore = useThemeStore()
    const { isDark } = storeToRefs(themeStore)
    const router = useRouter()
    const tabs = [
      {
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
    const iconTempalte = computed(() => (isDark.value ? 'Sunny' : 'Moon'))

    return {
      tabs,
      onChangeRoute,
      onChangeTheme,
      iconTempalte,
      avatarEl,
    }
  },
  render() {
    return h(
      'div',
      {
        class: ['resume-header', 'w-full', 'justify-between', 'mt-10'],
      },
      [
        // h(ElAvatar, {
        //   id: 'my-avatar',
        //   class: ['ml-10', 'cursor-pointer'],
        // style: { width: `${50}px`, height: `${50}px` },
        //   src: this.auth,
        //   ref: 'avatarEl',
        //   onClick: () => this.onChangeRoute('/Home'),
        // }),
        h('div', {
          style: { width: `${50}px`, height: `${50}px`, opacity: 0 },
        }),
        h(
          'div',
          {
            class: [
              'header-tabs',
              'flex',
              'justify-around',
              'items-center',
              'cursor-pointer',
            ],
          },
          this.tabs.map((item) => {
            return h(
              'div',
              {
                class: ['tabs-item'],
                // on: {
                //   click: () => this.push(item.route),
                // },
                onClick: () => this.onChangeRoute(item.route),
              },
              item.name,
            )
          }),
        ),
        h(ElButton, {
          class: ['mr-10'],
          icon: this.iconTempalte,
          circle: true,
          size: 'large',
          onClick: () => this.onChangeTheme(),
        }),
      ],
    )
  },
})
