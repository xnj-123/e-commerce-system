<template>
  <div>
    <TypeNav/>
    <List/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor" />
    <Brand/>
    <!-- <button @click="add" >点我数字增加一</button>
    <span>{{ num }}</span> -->
  </div>

</template>

<script>
import List from '@/pages/Home/List'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'

import { mapState } from 'vuex'

export default {
  name:'home',
  components:{
    List,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed:{
    // ...mapState('home',['num'])
    ...mapState({
      floorList : state => state.home.floorList,
    })
  },
  methods:{

    // add(){
    //   this.$store.dispatch('home/jia');
    // }
  },
  mounted(){
    this.$store.dispatch('home/getfloorList');

    this.$store.dispatch('user/UserInfo');
  
  }
}
</script>

<style>

</style>
