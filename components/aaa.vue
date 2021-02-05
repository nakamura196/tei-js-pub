<template>
  <component :is="element.name || 'span'">
    {{ element.text }}

    <template
      v-if="
        element.name == 'tei-pb' &&
        element.attributes &&
        element.attributes.corresp
      "
    >
      <v-icon
        class="ma-1"
        @click="canvas = facs[element.attributes.corresp.replace('#', '')]"
        >mdi-image</v-icon
      >
      <span class="ma-1" style="color: grey"
        >[Page @{{ element.attributes.corresp }}]</span
      >
    </template>
    <aaa v-for="(e, index) in element.elements" :key="index" :element="e"></aaa>

    <!-- 
      <template v-if="element.type === 'text'">
        vvvvvvvv
        {{ element.text }}
      </template>
      <template v-else>
        <aaa
          v-for="(e, index) in element.elements"
          :key="index"
          :element="e"
        ></aaa>
      </template>
      -->
  </component>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import aaa from '~/components/aaa.vue'

@Component({
  components: {
    aaa,
  },
  name: 'aaa',
})
export default class Menu extends Vue {
  @Prop({})
  element!: any

  mounted() {
    // console.log(this.element)
    // console.log(this.facs)
  }

  get canvas(): any {
    return this.$store.getters.canvas
  }

  set canvas(value) {
    this.$store.commit('setCanvas', value)
  }

  get facs(): any {
    return this.$store.getters.getFacs
  }

  set facs(value) {
    this.$store.commit('setFacs', value)
  }
}
</script>
