import { ElAvatar, ElButton } from 'element-plus'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'TabsHeader',
  setup: () => {
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
    return {
      tabs,
      onChangeRoute,
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
      h(ElButton, { class: ['mr-10'], icon: 'Sunny', circle: true, size: 'large' }),
    ])
  },
})
