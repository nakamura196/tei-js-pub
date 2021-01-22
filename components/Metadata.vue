<template>
  <div class="pa-5">
    <h3 class="my-5">{{ $t('metadata') }}</h3>
    <div v-html="metadata"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({})
export default class Metadata extends Vue {
  @Prop({})
  xml!: any

  get metadata() {
    const xml = this.xml
    if (!xml) {
      return ''
    }

    const header = xml.querySelector('teiHeader')
    return new XMLSerializer().serializeToString(header)
  }
}
</script>
