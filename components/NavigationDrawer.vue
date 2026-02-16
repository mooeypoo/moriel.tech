<template>
  <v-navigation-drawer v-model="drawerState">
    <v-list>
      <v-list-item>
        <template #prepend>
          <v-avatar>
            <v-img
              alt="Moriel Schottlender"
              src="/gravatar.jpg"
            />
          </v-avatar>
        </template>
      </v-list-item>
      <v-list-item
        href="#"
        @click="$router.push({ path: '/' }); $event.preventDefault()"
      >
        <v-list-item-title class="text-h6">
          Moriel Schottlender
        </v-list-item-title>
        <v-list-item-subtitle>
          Human-centered software
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider />
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDrawer',
  data: () => ({
    drawerState: false
  })
}
</script>
