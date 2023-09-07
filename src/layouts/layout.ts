import { layoutCss } from './style'
import TabsHeader from './components/header'
import MainCore from './components/container'
export default defineComponent({
  name: 'Layout',
  setup: () => {
    return {
    }
  },
  render() {
    return h('div', {
      class: ['main-layout container-bg', layoutCss],
    }, [
      h(TabsHeader),
      h(MainCore),
    ])
  },
})
