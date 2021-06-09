<template>
<Page>
  <StackLayout backgroundColor="#dce2e9" class="">
    <Label
      text="Top Characters"
      color="black"
      fontWeight="bold"
      textAlignment="center"
      fontSize="30"
      marginTop="10"
      marginBottom="5"
    />
    <ListView class="images" items="" for="character in characters">
      <v-template>
        <StackLayout backgroundColor="#f0e14a" class="images__item-wrapper">
          <Image :src="character.image" class="images__item-image" />
          <Label :text="character.name" class="images__item-name" />
          <StackLayout fontSize="15" marginLeft="10" marginTop="8">
            <Label marginBottom="2" >
              <Span text="Gender: " /> <Span :text="character.gender" />
            </Label>
            <Label marginBottom="2">
              <Span text="Status: " /> <Span :text="character.status" />
            </Label>
            <Label>
              <Span text="Specie: " /> <Span :text="character.species" />
            </Label>
          </StackLayout>
        </StackLayout>
      </v-template>
    </ListView>
  </StackLayout>
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
  ListView{
  height: 100%;
}
ActionBar {
  background-color: green;
  color: #ffffff;
}
.images {
  &__item-wrapper {
    width: 80%;
    height: 450;
    margin-top: 10;
    margin-bottom: 20;
  }
  &__item-image {
    height: 300;
    width: 100%;
  }
  &__item-name {
    margin-top: 10;
    font-size: 20;
    text-align: center;
  }
}
  </style>