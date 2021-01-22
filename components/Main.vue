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

  get styles(): any {
    return {
      teiHeader: 'display: none;',
      div: 'padding : 20px;',
      ab: 'padding : 20px;',
      head: 'font-weight: bold; font-size: large; padding : 20px;',
      'archival-description': 'padding-top: 100px',
      persName: 'background-color: #ffccbc;',
      placeName: 'background-color: #c8e6c9;',
      time: 'background-color: #fff9c4;',
    }
  }

  getStyle(name: string, type: any = null) {
    let result: string[] = []
    const styles = this.styles
    if (styles[name]) {
      result = result.concat(styles[name])
    }
    if (styles[type]) {
      result = result.concat(styles[type])
    }
    return result.join(' ')
  }
}
</script>
