import Vue from 'vue'

import Button from './button/button.vue'

const Components = {
  Button
}

Object.keys(Components).forEach(name => {
  console.log('-----------------------------')
  console.log(name)
  console.log('-----------------------------')
  Vue.component(name, Components[name])
})

export default Components
