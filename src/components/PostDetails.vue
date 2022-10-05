<template>
  <div>
    <h1 class="text-center heading">post details</h1>
    <div class="d-flex justify-content-center flex-column ml-5">
    <div v-for="post in postDetails" :key="post.id">
      <q-card
        class="my-card text-white shadow-10"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <q-card-section>
          <h1 class="heading">{{ post.id }}. {{ post.title }}</h1>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p class="paragraph">{{ post.body }}</p>
        </q-card-section>
      </q-card>
    </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
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
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 900px
  margin-bottom: 25px
.heading
  font-family: "Roboto"
  font-size: 30px
  font-weight: bold
  text-align: left
  margin-bottom: 30px
.paragraph
  font-family: "Roboto"
  font-size: 25px
  color: lightblue
  text-align: left
</style>
