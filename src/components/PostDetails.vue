<template>
<div>
        <q-layout
          view="hHh Lpr lff"
        >
        <header-component></header-component>
          <drawer-component></drawer-component>

          <q-page-container>
            <q-page padding>
              <div class="row q-gutter-xl">
                <q-card
                  class="my-card shadow-10 col-5"
                  q-gutter-xs
                  v-for="post in postDetails.slice(0, 5)"
                  :key="post.id"
                  v-on:click="blog()"
                >
                <img src="https://cdn.quasar.dev/img/mountains.jpg">
                  <q-card-section>
                    <h1 class="heading">{{ post.id }}. {{ post.title }}</h1>
                  </q-card-section>
                </q-card>
              </div>
            </q-page>
          </q-page-container>
        </q-layout>
</div>
</template>

<script>
import Axios from 'axios'
import HeaderComponent from '../components/HeaderComponent.vue'
import DrawerComponent from '../components/DrawerComponent.vue'
export default {
  components: { HeaderComponent, DrawerComponent },
  name: 'PostDetails',
  data () {
    return {
      postDetails: []
    }
  },
  mounted () {
    this.getPostDetails()
  },
  methods: {
    getPostDetails () {
      Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          this.postDetails = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
      Axios.post('https://jsonplaceholder.typicode.com/posts', {
        firstName: 'saikiran',
        lastName: 'maddipati'
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    blog () {
      this.$router.push('/blogpage')
    }
  }
}
</script>

<style lang="sass" scoped>
.user-logo
  width: 80px
  height: 70px
.my-card
  width: 50%
  max-width: 700px
  margin-bottom: 20px
.heading
  font-family: "Roboto"
  font-size: 20px
  font-weight: bold
  text-align: left
  margin-bottom: 30px
  line-height: 25px
.paragraph
  font-family: "Roboto"
  font-size: 25px
  color: lightblue
  text-align: left
.button
  height: 40px
  width: 120px
  background-color: skyblue
  font-family: "Roboto"
  font-size: 20px
  border-radius: 10px
</style>
