<template>
  <span>
    <template v-for="(obj, key) in elements">
      <template v-if="obj.text">
        <span :key="key">{{ obj.text }}</span>
      </template>
      <template v-else>
        <span
          :id="obj.attributes ? obj.attributes['xml:id'] : null"
          :key="key"
          :class="'tei-' + obj.name"
          :style="
            getStyle(obj.name, obj.attributes ? obj.attributes.type : null)
          "
          :type="obj.attributes ? obj.attributes.type : null"
        >
          <Main v-if="obj.elements" :key="key" :elements="obj.elements"></Main>
        </span>
      </template>
    </template>
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import axios from 'axios'
import Main from '~/components/Main.vue'

@Component({
  components: {
    Main,
  },
  name: 'Main',
})
export default class Main2 extends Vue {
  @Prop({})
  elements!: any

  get style(): {} {
    return this.$store.getters.getStyle
  }

  set style(value) {
    this.$store.commit('setStyle', value)
  }

  getStyle(name: string, type: any = null) {
    const result: string[] = []

    let key = name
    if (type) {
      key += `[type="${type}"]`
    }
    const style: any = this.style
    if (style[key]) {
      const obj = style[key]
      for (const key2 in obj) {
        result.push(`${key2}: ${obj[key2]}`)
      }
    }
    return result.join('; ')
  }
}
</script>
