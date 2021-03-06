<template>
  <div class="q-pa-md">
    <q-header bordered class="bg-white text-black">
      <q-toolbar class="q-px-md">
        <q-tabs
          no-caps
          active-color="primary"
          indicator-color="transparent"
          class="text-grey"
        >
          <q-route-tab name="Home" label="Home" to="/"/>
          <q-route-tab name="Collection" label="Collection" to="/collection"/>
        </q-tabs>
      </q-toolbar>
    </q-header>
  </div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {
  },
};
</script>

<style></style>
