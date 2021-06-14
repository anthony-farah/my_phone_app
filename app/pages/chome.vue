<template>
  <Page>
      <ActionBar backgroundColor="black" class="action-bar" />
<FlexboxLayout backgroundColor="black" flexDirection="column" justifyContent="center" class="full-height">
<Image src="../assets/images/defaultcharacter.png" class="logo-container" />
<StackLayout class="container">



<Button text="Fight" class="my-button" backgroundColor="rgb(224, 0, 0)"/> 



<Button text="Roster" @tap="goToroster" class="my-button" backgroundColor="rgb(224, 0, 0)"/>



<Button text="Shop" @tap="goToShop" class="my-button" backgroundColor="rgb(224, 0, 0)"/>



</StackLayout>
</FlexboxLayout>


</Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import login from '../pages/login.vue';
  import create from '../pages/create.vue';
  import roster from '../pages/roster.vue';
  


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
        goTologin() {
            this.$navigateTo(login)
        },
        goTocreate() {
            this.$navigateTo(create)
        },
        goToroster() {
            this.$navigateTo(roster)
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
  .border-bottom {
      border-bottom-width: 1;
      border-bottom-color: white;
      margin-bottom: 40;
    padding-bottom: 8;
  }
  .my-button {
      background-color: #4BD5DC;
    color: white;
    font-weight: bold;
    border-radius: 25;
    padding-top: 14;
    padding-bottom: 14;
    text-transform: uppercase;
    letter-spacing: 0.1;
    margin-bottom: 20;
    margin-top: 10;
  }
  .full-height {
    height: 100%;
  }
  .container {
    margin-left: 34;
    margin-right: 34;
  }
  </style>