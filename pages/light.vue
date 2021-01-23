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
        <div id="tei" v-html="teiHTML" />
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CETEI from 'CETEIcean'
import VueScrollTo from 'vue-scrollto'
// import Main from '~/components/Main.vue'
import Menu from '~/components/Menu.vue'
import Metadata from '~/components/Metadata.vue'

// const convert = require('xml-js')

export default {
  components: {
    Menu,
    Metadata,
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL || '',
      siteName: process.env.siteName || '',

      github: process.env.github || '',

      loading: false,

      width: window.innerWidth,
      height: window.innerHeight,

      drawer: false,
      drawer2: false,

      df: {},
      xmlStr: '',
      teiHTML: null,
    }
  },
  head() {
    const title = this.$t(this.siteName)
    return {
      titleTemplate: null,
      title,
    }
  },
  computed: {
    style: {
      get() {
        return this.$store.getters.getStyle
      },
      set(value) {
        this.$store.commit('setStyle', value)
      },
    },

    xml: {
      get() {
        return this.$store.getters.getXml
      },
      set(value) {
        this.$store.commit('setXml', value)
      },
    },
  },

  async created() {
    this.loading = true
    const query = this.$route.query

    const startTime = Date.now() // 開始時間

    // スタイル
    const style = query.style || 'data/shibusawa.json'
    const result2 = await axios.get(style)
    this.style = result2.data

    // XML
    const u = query.u || 'data/small.xml'

    const CETEIcean = new CETEI()
    CETEIcean.addBehaviors({
      tei: {
        persName(el) {
          // eslint-disable-next-line nuxt/no-globals-in-created
          const a = document.createElement('a')
          a.setAttribute(
            'href',
            'https://shibusawa-lab.github.io/lab1/entity/agential/' +
              el.textContent
          )
          a.setAttribute('target', '_blank')
          a.setAttribute(
            'style',
            'text-decoration: none; color: black; background-color: #ffccbc;'
          )
          a.innerHTML = el.innerHTML
          return a
        },
        placeName(el) {
          // eslint-disable-next-line nuxt/no-globals-in-created
          const a = document.createElement('a')
          a.setAttribute(
            'href',
            'https://shibusawa-lab.github.io/lab1/entity/spatial/' +
              el.textContent
          )
          a.setAttribute('target', '_blank')
          a.setAttribute(
            'style',
            'text-decoration: none; color: black; background-color: #c8e6c9;'
          )
          a.innerHTML = el.innerHTML
          return a
        },
        time(el) {
          // eslint-disable-next-line nuxt/no-globals-in-created
          const a = document.createElement('span')
          a.setAttribute('style', 'background-color: #fff9c4;')
          a.innerHTML = el.innerHTML
          return a
        },
        date(el) {
          // eslint-disable-next-line nuxt/no-globals-in-created
          const a = document.createElement('span')
          a.setAttribute('style', 'background-color: #bbdefb;')
          a.innerHTML = el.innerHTML
          return a
        },
        head(el) {
          // eslint-disable-next-line nuxt/no-globals-in-created
          const a = document.createElement('div')
          a.setAttribute(
            'style',
            'padding: 20px; font-size: large; font-weight: bold;'
          )
          a.innerHTML = el.innerHTML
          return a
        },
        ab(el) {
          // eslint-disable-next-line nuxt/no-globals-in-created
          const a = document.createElement('div')
          a.setAttribute('style', 'padding: 20px;')
          a.innerHTML = el.innerHTML
          return a
        },
        div(el) {
          if (el.getAttribute('type') === 'archival-description') {
            // eslint-disable-next-line nuxt/no-globals-in-created
            const a = document.createElement('div')
            a.setAttribute('style', 'padding-top: 100px;')
            a.innerHTML = el.innerHTML
            return a
          }
        },
        figure(el) {
          // eslint-disable-next-line nuxt/no-globals-in-created
          const a = document.createElement('div')
          a.setAttribute('style', 'padding: 20px;')
          a.innerHTML = el.innerHTML
          return a
        },
      },
    })

    const self = this
    CETEIcean.getHTML5(u, function (data) {
      console.log(data)
      self.teiHTML = data.outerHTML

      self.loading = false

      // eslint-disable-next-line nuxt/no-globals-in-created
      window.setTimeout(function () {
        self.loading = false
        self.scroll()
      }, 0)
    })

    const result = await axios.get(u)

    const endTime = Date.now() // 終了時間
    console.log('downloaded', endTime - startTime)

    let xml = result.data
    if (typeof xml === 'string') {
      const dpObj = new DOMParser()
      xml = dpObj.parseFromString(xml, 'text/xml')
    }

    this.xml = xml

    /*
        const result = await axios.get(u)

        let endTime = Date.now() // 終了時間
        console.log('downloaded', endTime - startTime)

        let xml = result.data
        if (typeof xml === 'string') {
        const dpObj = new DOMParser()
        xml = dpObj.parseFromString(xml, 'text/xml')
        }

        this.xml = xml

        const xmlStr = new XMLSerializer().serializeToString(xml)
        this.xmlStr = xmlStr

        endTime = Date.now() // 終了時間
        console.log('converted to xml string', endTime - startTime)

        const dfStr = convert.xml2json(xmlStr, { compact: false, spaces: 4 })
        const df = JSON.parse(dfStr)

        this.df = df

        endTime = Date.now() // 終了時間
        console.log('converted to json', endTime - startTime)

        */

    /*
        window.setTimeout(function () {
        self.loading = false
        self.scroll()

        // endTime = Date.now() // 終了時間
        // console.log('loaded', endTime - startTime)
        }, 0)
        */
  },

  mounted() {
    window.addEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.width = window.innerWidth
      this.height = window.innerHeight
    },

    scroll() {
      const query = this.$route.query
      if (query.id) {
        const id = query.id

        const point = document.querySelector('#' + id).getBoundingClientRect()
        const point2 = document
          .querySelector('#container')
          .getBoundingClientRect()

        const options = {
          container: '#container',
          offset: -1 * point2.width + point.width,
          x: true,
        }
        VueScrollTo.scrollTo('#' + id, 0, options)
      }
    },
  },
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
