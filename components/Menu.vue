<template>
  <v-list>
    <v-list-item class="mt-5">
      <v-list-item-title
        ><h3>{{ $t('コンテンツ') }}</h3></v-list-item-title
      >
    </v-list-item>
    {{ model }}
    <v-list-item-group v-model="model">
      <v-list-item
        v-for="(item, key) in items"
        :key="key"
        link
        @click="scroll(item.id)"
      >
        <v-list-item-action> </v-list-item-action>
        <v-list-item-content> {{ item.label }} </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import VueScrollTo from 'vue-scrollto'

@Component({})
export default class Menu extends Vue {
  @Prop()
  id: any

  get xml(): any {
    return this.$store.getters.getXml
  }

  set xml(value) {
    this.$store.commit('setXml', value)
  }

  model: number = 0

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
          const id = div.attributes['xml:id'].value
          items.push({
            label: child.textContent,
            id,
          })
          if (this.id === id) {
            this.model = items.length - 1
          }
        }
      }
    }
    return items
  }

  scroll(id: string) {
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
