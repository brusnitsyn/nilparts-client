import Vue from 'vue'
import Teleport from 'portal-vue'

Vue.use(Teleport, {
  portalName: 'teleport', // default: 'portal'
  portalTargetName: 'teleport-target', // default:'portal-target'
})
