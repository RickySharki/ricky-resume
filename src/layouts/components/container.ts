import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'MainCore',
  render() {
    return h('div', { class: 'main-container mt-10' }, [h(RouterView)])
  },

})
