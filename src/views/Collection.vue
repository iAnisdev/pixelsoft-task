<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-12 col-md-6  q-px-md">
        <q-card flat>
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col">
                <div class="text-h6">{{title}}</div>
              </div>
            </div>
          </q-card-section>

          <q-card-section class="text-justify">
            {{ description }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-6 q-pa-sm">
        <div class="fit row wrap justify-start items-start content-start">
          <div class="q-pa-sm" style="overflow: auto;min-width: 50%; max-width: 50%;" v-for="(block , bindex) in blocks" :key="bindex">
            <block :id="block.id" :value="block.value"/>
          </div>
        </div>
      </div>
    </div>
      <q-dialog v-model="successModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Well done!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Good job on completing your collection!
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import block from '@/components/block'
export default {
  name: "home",
  data(){
    return {
      successModal: false
    }
  },
  components: {
    block
  },
  computed:{
    ...mapGetters({
      title: 'getTitle',
      description: 'getDescription',
      blocks: 'getBlocks'
    })
  },
  watch:{
    blocks(newVal){
      let result = newVal.map(({ value }) => value)
      if(result.every(val => val === 100)){
        this.successModal = true
      }
    }
  },
  mounted(){
    this.$store.dispatch('fetchData')
  }
};
</script>
