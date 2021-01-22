<template>
  <div class="pa-5">
    <h3 class="my-5">{{ $t('metadata') }}</h3>
    <div v-html="metadata"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import VueScrollTo from 'vue-scrollto'

@Component({})
export default class Metadata extends Vue {
  @Prop({})
  xml!: any

  get metadata() {
    const xml = this.xml
    if (!xml) {
      return []
    }

    const header = xml.querySelector('teiHeader')
    return new XMLSerializer().serializeToString(header)
  }

  scroll(id) {
    const point: any = (document.querySelector(
      '#' + id
    ) as any).getBoundingClientRect()
    const point2: any = (document.querySelector(
      '#container'
    ) as any).getBoundingClientRect()

    const options = {
      container: '#container',
      offset: -1 * point2.width + point.width,
      x: true,
    }
    VueScrollTo.scrollTo('#' + id, 0, options)
  }
}
</script>
