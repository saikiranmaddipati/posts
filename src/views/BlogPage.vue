<template>
  <div>
    <q-layout view="hHh Lpr lff">
      <header-component></header-component>
      <drawer-component></drawer-component>

      <q-page-container>
        <q-page padding>
          <div>
            <div class="blog-container">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/ocean.jpg"
                class="image"
              />
            </div>
            <div class="text-container">
              <div>
                <p>12 Oct 2022</p>
              </div>
              <div v-if="postDetails" >
                <p class="heading-1">{{ postDetails.title }}</p>
                <p>{{ postDetails.body }}</p>
              </div>
              <div>
                <h1 class="heading-2">Comment</h1>
                <hr />
                <div
                  class="row justify-start"
                >
                  <div class="image-container">
                    <img
                      src="https://cdn.quasar.dev/img/boy-avatar.png"
                      class="image-2"
                    />
                    </div>
                    <div class="col-8" v-if="blogDetails">
                      <h1 class="heading-3">{{ blogDetails.name }} (Designer)</h1>
                      <p class="paragraph-2">{{ blogDetails.body }}</p>
                    </div>
                </div>
              </div>
            </div>
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
  name: 'BlogPage',
  data () {
    return {
      blogDetails: [],
      postDetails: []
    }
  },
  props: ['id'],
  mounted () {
    this.getBlogDetails()
  },
  methods: {
    getBlogDetails () {
      Axios.get(`https://jsonplaceholder.typicode.com/comments/${this.id}`)
        .then((response) => {
          this.blogDetails = response.data
          console.log(this.blogDetails)
        })
        .catch(function (error) {
          console.log(error)
        })
      Axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then((response) => {
          this.postDetails = response.data
          console.log(this.postDetails)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.blog-container {
  width: 100%;
  max-width: 100%;
  height: 100%;
  height: auto;
}
.image {
  width: 100%;
  max-width: 100%;
  height: 50vh;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.text-container {
  padding-top: 8px;
}
.heading-1 {
  font-family: "Roboto";
  font-size: 15px;
  font-weight: 500;
  line-height: 1rem;
}
.heading-2 {
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
  line-height: 1rem;
  padding-top: 10px;
}
.paragraph-1 {
  font-family: "Roboto";
  font-size: 15px;
  padding-top: 10px;
}
.image-2 {
  width: 50px;
  height: 50px;
  border-radius: 150px;
}
.image-container {
  margin-right: 20px;
}
.paragraph-2 {
  font-family: "Roboto";
  font-size: 15px;
}
.heading-3 {
  font-family: "Roboto";
  font-size: 15px;
  font-weight: 500;
  line-height: 1rem;
}
.container {
  margin-left: 50px;
  width: 100%;
}
</style>
