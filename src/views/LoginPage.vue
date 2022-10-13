<template>
  <div class="background-container row justify-center">
    <div class="column justify-center">
      <div class="card column justify-center">
          <div class="row justify-center">
            <h1 class="heading">Health Catalyst</h1>
          </div>
          <div>
            <input
              type="text"
              class="login"
              v-model="input.username"
              placeholder="Username"
            />
            <input
              type="password"
              class="login-2"
              v-model="input.password"
              placeholder="Password"
            />
          </div>
          <div class="row justify-start">
            <span class="link">Forget Password?</span>
          </div>
          <div class="row justify-center">
            <button v-on:click="login()" class="button">Login</button>
          </div>
          <div class="row justify-center q-pt-md">
            <p v-if="showError" class="error">
              Username or Password is incorrect
            </p>
            <p v-if="showOutput" class="error">
              Please Enter username and password
            </p>
          </div>
          <div>
            <p class="row justify-center paragraph">
              Not yet a member?<span class="link-2">Sign Up</span>
            </p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router/index.js'
import { mapGetters } from 'vuex'
export default {
  name: 'LoginPage',
  data () {
    return {
      input: {
        username: '',
        password: ''
      },
      showError: false,
      showOutput: false
    }
  },
  computed: {
    ...mapGetters(['allUsers'])
  },
  methods: {
    login () {
      /* this.$store.dispatch('LOGIN', {
        username: this.input.username,
        password: this.input.password
      })
        .then(success => {
          this.$router.push('/')
        }) */
      const username = this.input.username
      const password = this.input.password
      if (username !== '' && password !== '') {
        if (username === 'saikiran' && password === 'pass@123') {
          // store the username and password in vuex store
          this.$store.dispatch('LOGIN', {
            username: username,
            password: password
          })
          const name = this.$store.getters.storeUsers.username
          const password1 = this.$store.getters.storeUsers.password
          console.log(name)
          console.log(password1)
          router.push('/blogs')
        } else {
          console.log('The Username or password is incorrect')
          this.showError = true
          this.showOutput = false
        }
      } else {
        console.log('Please Enter username and password')
        this.showOutput = true
        this.showError = false
      }
    }
  }
}
</script>

<style scoped>
.background-container {
  height: 100vh;
  background-color: #536878;
}
.card {
  height: 470px;
  width: 400px;
  background-color: white;
}
.heading {
  font-family: "Roboto";
  font-size: 40px;
  font-weight: 500;
  color: black;
  margin-bottom: 20px;
}
.button {
  height: 40px;
  width: 300px;
  border: none;
  background-color: #0a99cd;
  font-family: "Roboto";
  font-size: 20px;
  border-radius: 10px;
  margin-top: 15px;
  border-radius: 5px;
}
.login {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
  border-color: lightslategray;
}
.login-2 {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 9px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
  border-color: lightslategray;
}
.paragraph {
  font-family: "Roboto";
  font-size: 15px;
  margin-top: 30px;
}
.link {
  color: #0a99cd;
  font-family: "Roboto";
  font-size: 15px;
  padding-left: 48px;
}
.link-2{
  color: #0a99cd;
  font-family: "Roboto";
  font-size: 15px;
}
.error {
  color: red;
  font-family: "Roboto";
  font-size: 15px;
}
</style>
