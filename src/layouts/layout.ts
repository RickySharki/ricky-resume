import { RouterView } from 'vue-router'
import { layoutCss } from './style'
import TabsHeader from './components/header'
export default defineComponent({
  name: 'Layout',
  setup: () => {
    return {
    }
  },
  render() {
    return h('div', {
      class: ['main-layout', layoutCss],
    }, [
      h(TabsHeader),
      h(RouterView),
    ])
  },
})
