<template>
  <div class="pa-5">
    <h3 class="my-5">{{ $t('metadata') }}</h3>
    {{ metadata }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Metadata extends Vue {
  get xml(): any {
    return this.$store.getters.getXml
  }

  set xml(value) {
    this.$store.commit('setXml', value)
  }

  get metadata() {
    const xml = this.xml
    if (!xml) {
      return ''
    }
    const header = xml.querySelector('tei-teiheader')
    if (header) {
      return new XMLSerializer().serializeToString(header)
    } else {
      return ''
    }
  }
}
</script>
