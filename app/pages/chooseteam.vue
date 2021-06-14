<template>
<Page>
<ActionBar backgroundColor="black" />
<AbsoluteLayout backgroundColor="black">
<Label text="CHOOSE" color="rgb(224, 0, 0)" fontSize="50" fontWeight="bold" marginLeft="70" marginTop="50" class="title" />
<Label text="A" color="rgb(224, 0, 0)" fontSize="50" fontWeight="bold" marginTop="105" marginLeft="170" class="title" />
<Label text="TEAM" color="rgb(224, 0, 0)" fontSize="50" fontWeight="bold" marginTop="165" marginLeft="110" class="title" />

<Button text="Hysteria" @tap="goTochome" left="35" top="320" width="100" height="100" fontSize="19" class="button" backgroundColor="rgb(224, 0, 0)"/> 



<Button text="Serenity" @tap="goTochome" left="210" top="320" width="100" height="100" fontSize="19" class="button" color="black" backgroundColor="white"/> 



</AbsoluteLayout>








</Page>
</template>


<script lang="ts">
  import Vue from "nativescript-vue";
  import chome from '../pages/chome.vue';


  export default Vue.extend({

    data(){
      return {
        usernameInput: '',
        passwordInput: '',
        loggedIn: false,
        characterName:'',
        health:2,
        moves:[]
      }
    },


  methods: {
        goTochome() {
            this.$navigateTo(chome)
        }
    },
    watch: {
      characterName(){
        console.log('character name changed')
      }
    },
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    },
  });
</script>

<style scoped lang="scss">
  @import '@nativescript/theme/scss/variables/blue';

  // Custom styles
  .fas {
    @include colorize($color: accent);
  }

  .title {
    margin-left: 65;
    margin-right: 34; 
    margin-bottom: 250;
    font-family:'Fantasy', 'Papyrus';
  }
  .button {
      border-radius: 25;
      font-weight: bold;
      font-family:'Fantasy', 'Papyrus';

  }
</style>