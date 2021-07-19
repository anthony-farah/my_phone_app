<template>
    <Page>
        <ActionBar backgroundColor="black" />
        <FlexboxLayout backgroundImage="https://c4.wallpaperflare.com/wallpaper/733/88/989/dark-black-and-white-abstract-black-background-wallpaper-preview.jpg" flexDirection="column" justifyContent="center" class="full-height"> 

        <SearchBar hint="Search friends username" :text="searchPhrase" @textChange="onTextChanged" @submit="onSubmit" class="search" />


        </FlexboxLayout>
    </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
   
   

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



</script>

<style scoped lang="scss">
  @import '@nativescript/theme/scss/variables/blue';

  .search {
    margin-bottom: 625;
    margin-top: 10;
    margin-left: 15;
    margin-right: 15;
  }


  </style>
