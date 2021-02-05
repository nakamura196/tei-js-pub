<template>
  <div>
    <div>
      <v-navigation-drawer
        v-model="drawer"
        style="z-index: 100000"
        app
        :temporary="true"
        :width="(256 * 3) / 2"
      >
        <Menu :id="$route.query.id"></Menu>
      </v-navigation-drawer>

      <!--
      <v-navigation-drawer
        v-model="drawer2"
        app
        :temporary="true"
        right
        :width="256 * 2"
      >
        <Metadata></Metadata>
      </v-navigation-drawer>
      -->

      <v-app-bar color="primary" dark flat>
        <v-btn icon @click="drawer = !drawer"
          ><v-icon>mdi-view-list</v-icon></v-btn
        >
        <v-toolbar-title>
          <Title></Title>
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

        <!-- <v-app-bar-nav-icon @click.stop="drawer2 = !drawer2" /> -->
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

    <v-container fluid>
      <v-row>
        <v-col @click="index -= 1"
          ><v-btn fab dark small>
            <v-icon dark> mdi-menu-left </v-icon>
          </v-btn></v-col
        >
        <v-col class="text-right" @click="index += 1"
          ><v-btn fab dark small>
            <v-icon dark> mdi-menu-right </v-icon>
          </v-btn></v-col
        >
      </v-row>

      <v-row class="mt-2">
        <v-col cols="12" :sm="manifest ? 6 : 12">
          <v-card
            id="container"
            flat
            outlined
            class="scroll vertical"
            :style="`height: ${height * 0.85}px; width: ${
              manifest ? width / 2 : width
            }px;`"
          >
            <div class="pa-4 px-5">
              <!--
              <div id="tei" />
              -->
              <!-- 
              <component :is="'tei-div'"></component>
              <tei-div>aaaaa</tei-div>
              <div v-if="divs[index]" v-html="divs[index]" />
              <tei-div>aaaaa</tei-div>
              -->
              <aaa v-if="divs2.length > 0" :element="bbb(divs2[index])"></aaa>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" :sm="manifest ? 6 : 12">
          <iframe
            v-show="!loading"
            v-if="manifest"
            :src="`curation/?manifest=${manifest}&canvas=${canvas}`"
            width="100%"
            :style="`height: ${height * 0.85}px;`"
            allowfullscreen="allowfullscreen"
            frameborder="0"
          >
          </iframe>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CETEI from 'CETEIcean'
import VueScrollTo from 'vue-scrollto'
import $ from 'jquery'
import Menu from '~/components/Menu3.vue'
import Title from '~/components/Title.vue'
import aaa from '~/components/aaa.vue'

const convert = require('xml-js')

export default {
  components: {
    Menu,
    Title,
    aaa,
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

      // pos: 1,
      // canvas: '',
      manifest: null,

      index: 0,
      divs: [],
      ids: {},
      ids2: {},
      divs2: [],
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

    facs: {
      get() {
        return this.$store.getters.getFacs
      },
      set(value) {
        this.$store.commit('setFacs', value)
      },
    },

    canvas: {
      get() {
        return this.$store.getters.getCanvas
      },
      set(value) {
        this.$store.commit('setCanvas', value)
      },
    },

    id: {
      get() {
        return this.$store.getters.getId
      },
      set(value) {
        this.$store.commit('setId', value)
      },
    },
  },

  watch: {
    id(val) {
      if (!val) {
        return
      }

      this.$router.push(
        this.localePath({
          name: 'light2',
          query: {
            u: this.$route.query.u,
            id: val,
          },
        }),
        () => {},
        () => {}
      )

      this.index = this.ids[val]
    },

    index(val) {
      this.id = this.ids2[val]
    },
  },

  mounted() {
    this.loading = true

    window.addEventListener('resize', this.handleResize)

    const query = this.$route.query
    const url = query.u || 'data/small.xml'
    const CETEIcean = new CETEI()

    const id = this.$route.query.id

    const self = this
    console.log('1')
    CETEIcean.getHTML5(url, function (data) {
      console.log('2')
      self.xml = data

      const divs = $(data).find('tei-div')

      const arr = []
      const arr2 = []
      const ids = {}
      const ids2 = {}

      for (let i = 0; i < divs.length; i++) {
        const div = divs[i]

        arr2.push(div)

        if ($(div).attr('xml:id')) {
          ids[$(div).attr('xml:id')] = i
          ids2[i] = $(div).attr('xml:id')
        } else {
          ids[i] = i
          ids2[i] = i
        }

        if (id) {
          self.index = ids[id]
        }
      }

      const sources = $(data).find('tei-source')
      const facs = {}
      for (let i = 0; i < sources.length; i++) {
        const source = sources[i]
        facs[$(source).attr('xml:id')] = $(source).attr('source')
      }

      self.facs = facs

      self.divs = arr
      self.divs2 = arr2
      self.ids = ids
      self.ids2 = ids2

      console.log('3')

      // マニフェスト
      const manifest = $(data).find('tei-facsimile').attr('source')
      self.manifest = manifest

      // self.scroll()

      /*
       */
      self.loading = false

      console.log('4')
    })
  },

  methods: {
    handleResize() {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.width = window.innerWidth
      this.height = window.innerHeight
    },

    bbb(data) {
      if (!data) {
        return {}
      }
      const dfStr = convert.xml2json(data.outerHTML, {
        compact: false,
        spaces: 4,
      })
      const df = JSON.parse(dfStr)

      return df.elements[0]
    },

    scroll() {
      const query = this.$route.query
      if (query.id) {
        const id = query.id

        // const point = document.querySelector('#' + id).getBoundingClientRect()
        const point2 = document
          .querySelector('#container')
          .getBoundingClientRect()

        const options = {
          container: '#container',
          offset: -1 * point2.width, // + point.width,
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

tei-persName {
  background-color: #ffccbc;
}

tei-placeName {
  background-color: #c8e6c9;
}

tei-date {
  background-color: #bbdefb;
}

tei-time {
  background-color: #fff9c4;
}

tei-head {
  margin: 20px;
  font-size: large !important;
  font-weight: bold;
}

/* START TOOLTIP STYLES */
[tooltip] {
  position: relative; /* opinion 1 */
}

/* Applies to all tooltips */
[tooltip]::before,
[tooltip]::after {
  text-transform: none; /* opinion 2 */
  font-size: 15px;
  font-weight: normal;
  /*font-size: 0.9em;*/ /* opinion 3 */
  line-height: 1;
  user-select: none;
  pointer-events: none;
  position: absolute;
  display: none;
  opacity: 0;
}
[tooltip]::before {
  content: '';
  border: 5px solid transparent; /* opinion 4 */
  z-index: 1001; /* absurdity 1 */
}
[tooltip]::after {
  content: attr(tooltip); /* magic! */

  /* most of the rest of this is opinion */
  font-family: Helvetica, sans-serif;
  text-align: center;

  /*
    Let the content set the size of the tooltips
    but this will also keep them from being obnoxious
    */
  min-width: 3em;
  max-width: 21em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /*padding: 1ch 1.5ch;*/
  padding: 1.5ch;
  border-radius: 0.3ch;
  box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);
  background: #333;
  color: #fff;
  z-index: 1000; /* absurdity 2 */
}

/* Make the tooltips respond to hover */
[tooltip]:hover::before,
[tooltip]:hover::after {
  display: block;
}

/* don't show empty tooltips */
[tooltip='']::before,
[tooltip='']::after {
  display: none !important;
}

/* FLOW: UP */
[tooltip]:not([flow])::before,
[tooltip][flow^='up']::before {
  bottom: 100%;
  border-bottom-width: 0;
  border-top-color: #333;
}
[tooltip]:not([flow])::after,
[tooltip][flow^='up']::after {
  bottom: calc(100% + 5px);
}
[tooltip]:not([flow])::before,
[tooltip]:not([flow])::after,
[tooltip][flow^='up']::before,
[tooltip][flow^='up']::after {
  left: 50%;
  transform: translate(-50%, -0.5em);
}

/* FLOW: DOWN */
[tooltip][flow^='down']::before {
  top: 100%;
  border-top-width: 0;
  border-bottom-color: #333;
}
[tooltip][flow^='down']::after {
  top: calc(100% + 5px);
}
[tooltip][flow^='down']::before,
[tooltip][flow^='down']::after {
  left: 50%;
  transform: translate(-50%, 0.5em);
}

/* FLOW: LEFT */
[tooltip][flow^='left']::before {
  top: 50%;
  border-right-width: 0;
  border-left-color: #333;
  left: calc(0em - 5px);
  transform: translate(-0.5em, -50%);
}
[tooltip][flow^='left']::after {
  top: 50%;
  right: calc(100% + 5px);
  transform: translate(-0.5em, -50%);
}

/* FLOW: RIGHT */
[tooltip][flow^='right']::before {
  top: 50%;
  border-left-width: 0;
  border-right-color: #333;
  right: calc(0em - 5px);
  transform: translate(0.5em, -50%);
}
[tooltip][flow^='right']::after {
  top: 50%;
  left: calc(100% + 5px);
  transform: translate(0.5em, -50%);
}

/* KEYFRAMES */
@keyframes tooltips-vert {
  to {
    opacity: 0.9;
    transform: translate(-50%, 0);
  }
}

@keyframes tooltips-horz {
  to {
    opacity: 0.9;
    transform: translate(0, -50%);
  }
}

/* FX All The Things */
[tooltip]:not([flow]):hover::before,
[tooltip]:not([flow]):hover::after,
[tooltip][flow^='up']:hover::before,
[tooltip][flow^='up']:hover::after,
[tooltip][flow^='down']:hover::before,
[tooltip][flow^='down']:hover::after {
  animation: tooltips-vert 300ms ease-out forwards;
}

[tooltip][flow^='left']:hover::before,
[tooltip][flow^='left']:hover::after,
[tooltip][flow^='right']:hover::before,
[tooltip][flow^='right']:hover::after {
  animation: tooltips-horz 300ms ease-out forwards;
}
</style>
