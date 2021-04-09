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

      <v-app-bar flat>
        <v-btn icon @click="drawer = !drawer"
          ><v-icon>mdi-view-list</v-icon></v-btn
        >
        <v-toolbar-title>
          <Title></Title>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template #activator="{ on }">
            <v-btn depressed btn v-on="on">
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

    <v-container v-show="!loading" fluid>
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
              <div id="tei" />
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" :sm="manifest ? 6 : 12">
          <iframe
            v-show="!loading"
            v-if="manifest"
            :src="
              baseUrl +
              `/mirador/?manifest=${manifest}&canvas=${canvas}&bottomPanel=false`
            "
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
import Menu from '~/components/Menu2.vue'
import Title from '~/components/Title.vue'

export default {
  components: {
    Menu,
    Title,
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
      canvas: '',
      manifest: null,
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

  mounted() {
    this.loading = true

    window.addEventListener('resize', this.handleResize)

    const query = this.$route.query
    const url = query.u || 'data/small.xml'
    const CETEIcean = new CETEI()

    const self = this
    CETEIcean.getHTML5(url, function (data) {
      self.xml = data

      // graphicへの対応
      const sources = data.getElementsByTagName('tei-graphic')
      for (let i = 0; i < sources.length; i++) {
        const source = sources[i]
        $(source).removeAttr('url')
      }

      $('#tei').append(data)

      // マニフェスト
      const manifest = $('tei-facsimile').attr('source')
      self.manifest = manifest

      const pbs = $('tei-pb')
      for (let i = 0; i < pbs.length; i++) {
        const pb = pbs[i]

        if (!$(pb).attr('corresp')) {
          continue
        }
        const corresp = $(pb).attr('corresp').replace('#', '')

        const source = $('#' + corresp)
        const canvas = source.attr('source')

        source.text = ''

        const iiificon = $(
          `<div class="ma-2"><img width="30px" style="cursor: pointer; color: green;" src="${
            self.baseUrl
          }/img/icons/image-24px.svg"/><span class="ma-1" style="color : #9E9E9E">[Page @${$(
            pb
          ).attr('corresp')}]</span></div>`
        )
        iiificon.on('click', function () {
          self.canvas = canvas
        })
        $(pb).prepend(iiificon)

        iiificon.after(``)
      }

      self.scroll()

      self.loading = false
    })
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
</style>
