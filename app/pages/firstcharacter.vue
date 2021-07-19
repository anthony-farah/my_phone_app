<template>
<Page>
<ActionBar title="Choose a First Character" backgroundColor="black" >
<NavigationButton visibility="collapsed"/>
</ActionBar>

    <Label text="CHOOSE" color="rgb(224, 0, 0)" fontSize="50" fontWeight="bold" marginLeft="1300" marginTop="50" class="title" />
    <Label text="YOUR" color="rgb(224, 0, 0)" fontSize="50" fontWeight="bold" marginTop="105" marginLeft="295" class="title" />
    <Label text="CHARACTER" color="rgb(224, 0, 0)" fontSize="50" fontWeight="bold" marginTop="165" marginLeft="1270" class="title" />

    <ListView backgroundColor="black" for="item in items" class="list-group" @itemTap="pickCharacter">
        <v-template>
            <GridLayout  class="list-group-item" rows="*" columns="auto, *">
                <Image row="0" col="0" :src="item.src" width="250" height="250" />
                <Label row="0" col="1" :text="item.text" fontWeight="bold"/>
            </GridLayout>
        </v-template>
    </ListView>
</Page>
</template>





<script lang="ts">
  import {mapActions} from "vuex"
  import chome from '../pages/chome.vue';


export default {
    data() {
    return {
      items: [
        { cname: "Dark Dragon", attacks:[], defense:5, strength:7, health:50, src: "https://free3d.com/imgd/raw64413-black-dragon-rigged-and-game-ready-92023.jpg" },
        { cname: "Light Dragon", attacks:[], defense:5, strength:7, health:50, src: "https://free3d.com/imgd/raw54327-dinodragon-1032.jpg" }
      ]
   }
  },

// {
// cname:'Boggert',
    // attacks:[],
    // defense:5,
    // strength:7,
    // health:50,
// }
    methods: {
        ...mapActions(['chooseFighter']),
        goTochome() {
            this.$navigateTo(chome)
        },
        pickCharacter(event) {
            this.chooseFighter(event.item)
            this.goTochome()
        }
    },
  }
</script>

<style scoped lang="scss">

  // Custom styles
  
  .title {
    margin-left: 65;
    margin-right: 34; 
    margin-bottom: 250;
    font-family:'Fantasy', 'Papyrus';
  }

</style>