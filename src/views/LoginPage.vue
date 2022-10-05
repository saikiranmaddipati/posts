<template>
<div>
  <div class="text-center">
    <h1 class="heading">Login Page</h1>
    <div>
      <input
        type="text"
        class="login"
        v-model="input.username"
        placeholder="Username"
      />
      <input
        type="password"
        class="login"
        v-model="input.password"
        placeholder="Password"
      />
    </div>
    <button v-on:click="login()" class="button">Login</button>
    <div class="mt-5">
      <p v-if="showError" id="error">Username or Password is incorrect</p>
      <p v-if="showOutput">Please Enter username and password</p>
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
          router.push('/about')
        } else {
          console.log('The Username or password is incorrect')
        }
      } else {
        console.log('Please Enter username and password')
        this.showOutput = true
      }
    }
  }
}
</script>

<style scoped>
.heading {
  font-family: "Roboto";
  font-size: 50px;
  font-weight: 500;
  color: blue;
}
.button {
  height: 40px;
  width: 120px;
  background-color: skyblue;
  font-family: "Roboto";
  font-size: 20px;
  border-radius: 10px;
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
}
</style>
