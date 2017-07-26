import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T work for Cordova builds,
   * it is only to be used for websites.
   *
   * To use "history" mode, open /config/index.js and set "build.publicPath"
   * to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * To switch back to default "hash" mode, don't forget to set
   * "build.publicPath" back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/', component: load('Index') }, // Default
    { path: '*', component: load('Error404') } // Not found
  ]
})
