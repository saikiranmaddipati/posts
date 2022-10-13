<template>
    <q-drawer
            v-model="drawer"
            show-if-above
            :width="300"
            :breakpoint="200"
            bordered
            content-class="bg-grey-3"
          >
            <q-scroll-area class="fit">
              <q-list>
                <template v-for="(menuItem, index) in menuList">
                  <q-item
                    :key="index"
                    clickable
                    :active="menuItem.label === 'blog'"
                    v-ripple
                  >
                    <q-item-section avatar>
                      <q-icon :name="menuItem.icon" />
                    </q-item-section>
                    <q-item-section>
                      {{ menuItem.label }}
                    </q-item-section>
                  </q-item>
                  <q-separator :key="'sep' + index" v-if="menuItem.separator" />
                </template>
              </q-list>
            </q-scroll-area>
          </q-drawer>
</template>

<script>
const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Blog',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  }
]
export default {
  data () {
    return {
      menuList
    }
  }
}
</script>
