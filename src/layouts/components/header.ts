import { ElButton } from 'element-plus'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@store/mouldes/theme'
import { storeToRefs } from 'pinia'

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
    const onChangeRoute = (page: Record<string, string>) => {
      router.push(page.route)
    }
    const onChangeTheme = () => {
      themeStore.toggleDark()
    }
    const iconTemplate = computed(() => (isDark.value ? 'Sunny' : 'Moon'))
    const renderThemeButton = () => {
      return h(ElButton, {
        class: ['mr-10'],
        icon: iconTemplate.value,
        circle: true,
        size: 'large',
        onClick: () => onChangeTheme(),
      })
    }
    return {
      tabs,
      onChangeRoute,
      avatarEl,
      renderThemeButton,
    }
  },
  render() {
    return h(
      'div',
      {
        'class': ['resume-header', 'w-full', 'justify-between', 'mt-10'],
        'data-aos': 'fade-up',
      },
      [
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
                onClick: () => this.onChangeRoute(item),
              },
              item.name,
            )
          }),
        ),
        this.renderThemeButton(),
      ],
    )
  },
})
