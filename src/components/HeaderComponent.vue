<template>
  <q-header elevated class="bg-black">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu"></q-btn>
          <q-toolbar-title>Header</q-toolbar-title>
          <q-btn v-on:click="logout()" class="button">Logout</q-btn>
        </q-toolbar>
      </q-header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    logout () {
      this.$router.push('/')
    }
  }
}
</script>
