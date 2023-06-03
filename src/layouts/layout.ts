import { RouterView } from 'vue-router'
import { layoutCss } from './style'
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
      h(RouterView),
    ])
  },
})
