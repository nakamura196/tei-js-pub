<template>
  <span>
    {{ title }}
  </span>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Menu extends Vue {
  get xml(): any {
    return this.$store.getters.getXml
  }

  set xml(value) {
    this.$store.commit('setXml', value)
  }

  get title() {
    const xml = this.xml
    if (!xml) {
      return 'TEI Viewer'
    }

    const title = xml.querySelector('tei-title').textContent

    return title
  }
}
</script>
