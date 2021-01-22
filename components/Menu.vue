<template>
  <v-list>
    <v-list-item class="mt-5">
      <v-list-item-title
        ><h3>{{ $t('コンテンツ') }}</h3></v-list-item-title
      >
    </v-list-item>
    <v-list-item
      v-for="(item, key) in items"
      :key="key"
      link
      @click="scroll(item.id)"
    >
      <v-list-item-action> </v-list-item-action>
      <v-list-item-content> {{ item.label }} </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import VueScrollTo from 'vue-scrollto'

@Component({})
export default class Menu extends Vue {
  @Prop({})
  xml!: any

  get items() {
    const xml = this.xml
    if (!xml) {
      return []
    }

    const items = []

    const divs = xml.querySelectorAll('div')
    for (let i = 0; i < divs.length; i++) {
      const div = divs[i]

      const children = div.children
      for (let j = 0; j < children.length; j++) {
        const child = children[j]
        if (child.nodeName === 'head') {
          items.push({
            label: child.textContent,
            id: div.attributes['xml:id'].value,
          })
        }
      }
    }
    return items
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
