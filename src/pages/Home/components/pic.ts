import { picCss } from '../style'
export default defineComponent({
  name: 'Pic',
  render() {
    return h('div', { class: ['pic', picCss] }, Array.from({ length: 10 }, () => h('div', { class: 'pic-item' })))
  },
})
