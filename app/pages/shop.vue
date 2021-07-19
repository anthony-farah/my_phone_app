<template>
    <Page>
        <ActionBar backgroundColor="black" />
        <AbsoluteLayout backgroundImage="https://c4.wallpaperflare.com/wallpaper/733/88/989/dark-black-and-white-abstract-black-background-wallpaper-preview.jpg">
            <Label text="COMING" color="rgb(224, 0, 0)" fontSize="50" fontWeight="bold" marginLeft="85" marginTop="50" class="comingsoon" />
            <Label text="SOON..." color="rgb(224, 0, 0)" fontSize="50" fontWeight="bold" marginTop="165" marginLeft="105" class="comingsoon" />

        </AbsoluteLayout>
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

.comingsoon {
    margin-left: 65;
    margin-right: 34; 
    margin-bottom: 250;
    font-family:'Fantasy', 'Copperplate';
}

</style>