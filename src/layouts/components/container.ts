import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'MainCore',
  setup() {
    return {

    }
  },
  render() {
    return h('div', { class: 'main-container' }, [h(RouterView)])
  },

})
