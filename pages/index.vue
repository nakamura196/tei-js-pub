<template>
  <div>
    <div>
      <v-navigation-drawer
        v-model="drawer"
        app
        :temporary="true"
        :width="(256 * 3) / 2"
      >
        <Menu></Menu>
      </v-navigation-drawer>

      <v-navigation-drawer
        v-model="drawer2"
        app
        :temporary="true"
        right
        :width="256 * 2"
      >
        <Metadata v-if="xml" :xml="xml"></Metadata>
      </v-navigation-drawer>

      <v-app-bar color="primary" dark>
        <v-btn icon @click="drawer = !drawer"
          ><v-icon>mdi-view-list</v-icon></v-btn
        >
        <v-toolbar-title>
          {{ '渋沢栄一伝記資料別巻第一日記のTEIマークアップ' }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template #activator="{ on }">
            <v-btn depressed btn color="primary" v-on="on">
              <v-icon class="mr-2">mdi-translate</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item :to="switchLocalePath('ja')">
              <v-list-item-title>日本語</v-list-item-title>
            </v-list-item>
            <v-list-item :to="switchLocalePath('en')">
              <v-list-item-title>English</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-app-bar-nav-icon @click.stop="drawer2 = !drawer2" />
      </v-app-bar>
    </div>

    <template v-if="loading"
      ><div class="pa-10 text-center">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </div>
    </template>
    <div class="px-10 pt-10" :style="`width: ${width}px;`">
      <v-card
        id="container"
        class="scroll vertical pa-5"
        outlined
        flat
        :style="`height: ${height * 0.85}px;`"
      >
        <Main :elements="df.elements"></Main>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import VueScrollTo from 'vue-scrollto'
import Main from '~/components/Main.vue'
import Menu from '~/components/Menu.vue'
import Metadata from '~/components/Metadata.vue'

const convert = require('xml-js')

@Component({
  components: {
    Main,
    Menu,
    Metadata,
  },
})
export default class about extends Vue {
  baseUrl: string = process.env.BASE_URL || ''
  siteName: string = process.env.siteName || ''
  github: string = process.env.github || ''

  loading: boolean = false

  width: number = window.innerWidth
  height: number = window.innerHeight

  drawer: boolean = false
  drawer2: boolean = false

  df: any = {}

  get style(): {} {
    return this.$store.getters.getStyle
  }

  set style(value) {
    this.$store.commit('setStyle', value)
  }

  get xml(): {} {
    return this.$store.getters.getXml
  }

  set xml(value) {
    this.$store.commit('setXml', value)
  }

  async created() {
    this.loading = true
    const query = this.$route.query

    // スタイル
    const style: any = query.style || 'data/shibusawa.json'
    const result2 = await axios.get(style)
    this.style = result2.data

    // XML
    const u: any = query.u || 'data/small.xml'
    const result = await axios.get(u)
    let xml = result.data
    if (typeof xml === 'string') {
      const dpObj = new DOMParser()
      xml = dpObj.parseFromString(xml, 'text/xml')
    }

    this.xml = xml

    const xmlStr = new XMLSerializer().serializeToString(xml)

    const dfStr = convert.xml2json(xmlStr, { compact: false, spaces: 4 })
    const df = JSON.parse(dfStr)
    this.df = df

    const self = this
    window.setTimeout(function () {
      self.loading = false
      self.scroll()
    }, 0)
  }

  mounted() {
    window.addEventListener('resize', this.handleResize)
  }

  handleResize() {
    // resizeのたびにこいつが発火するので、ここでやりたいことをやる
    this.width = window.innerWidth
    this.height = window.innerHeight
  }

  scroll() {
    const query = this.$route.query
    if (query.id) {
      const id = query.id

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

  head() {
    const title = this.$t(this.siteName)
    return {
      titleTemplate: null,
      title,
    }
  }
}
</script>
<style>
.scroll {
  overflow-y: auto;
}

.vertical {
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}
</style>
