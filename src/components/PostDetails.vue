<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#">
          <img
            src="https://media.istockphoto.com/vectors/overlapping-one-line-letter-u-logotype-vector-id1193846116"
            class="user-logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <router-link to="/" class="heading mt-4">Home</router-link>
          </div>
        </div>
      </nav>
    </div>
    <div class="card-container">
      <div>
        <q-card
          class="card text-white shadow-10"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
          v-for="post in postDetails.slice(0, 5)"
          :key="post.id"
        >
          <q-card-section>
            <h1 class="heading">{{ post.id }}. {{ post.title }}</h1>
            <p class="paragraph">{{ post.body }}</p>
          </q-card-section>
        </q-card>
      </div>
      <div class="d-flex flex-row justify-content-center pt-3">
        <button v-on:click="logout()" class="button">Logout</button>
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
    },
    logout () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass" scoped>
.user-logo
  width: 80px
  height: 70px
.card
  height: 280px
  width: 90%
  max-width: 1100px
  margin-bottom: 20px
.card-container
  padding: 150px
  background-image: linear-gradient(to right, #64eb34, #f44336)
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
.button
  height: 40px
  width: 120px
  background-color: skyblue
  font-family: "Roboto"
  font-size: 20px
  border-radius: 10px
</style>
