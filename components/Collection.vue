<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-toolbar-title>
        {{ title }}
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
    </v-app-bar>

    <v-container class="pa-10">
      <v-row>
        <v-col
          v-for="(obj, index) in result.members"
          :key="index"
          cols="12"
          :sm="3"
        >
          <v-card flat no-body class="mb-4">
            <div
              class="text-center grey lighten-2 pa-10"
              style="height: 150px; text-decoration: none"
            >
              <v-icon size="75">mdi-file</v-icon>
            </div>

            <div class="pa-4">
              <a
                :href="
                  baseUrl +
                  localePath({ name: 'light', query: { u: obj['@id'] } })
                "
              >
                <h4>{{ obj.label }}</h4>
              </a>

              <p v-if="obj.description" class="mt-2 mb-0">
                {{ obj.description }}
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-footer :dark="true" class="mt-5">
      <v-container class="text-center my-5">
        <p>
          <nuxt-link style="color: white" :to="localePath({ name: 'index' })">{{
            $t(siteName)
          }}</nuxt-link>
        </p>
        <p>
          <a :href="github">
            <v-icon>mdi-github</v-icon>
          </a>
        </p>
      </v-container>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Metadata extends Vue {
  baseUrl: any = process.env.BASE_URL
  get result(): {} {
    return this.$store.getters.getResult
  }

  set result(value) {
    this.$store.commit('setResult', value)
  }

  get title() {
    const result: any = this.result
    return result.label || 'TEI Viewer'
  }
}
</script>
