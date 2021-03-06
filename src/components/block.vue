<template>
  <q-card flat bordered :class="value === 0 ? 'bg-grey block__card' : 'bg-purple block__card'" @click="updateBlock({id})">
    <q-card-section>
      {{ value }}
    </q-card-section>
  </q-card>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: {
    id: {
      title: String,
      required: true,
    },
    value: {
      title: Number,
      required: true,
    },
  },
  methods:{
    ...mapActions({
      updateBlock: 'updateBlock'
    })
  }
};
</script>
