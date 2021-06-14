<template>
  <Page>
    <ActionBar backgroundColor="black" class="action-bar" />
    <FlexboxLayout backgroundColor="black" flexDirection="column" justifyContent="center" class="full-height"> 
    <Label text="CREATE" color="rgb(224, 0, 0)" fontSize="50" fontWeight="bold" class="title" marginLeft="85" marginBottom="100"/>
    <StackLayout class="container">
    <FlexboxLayout alignItems="center" backgroundColor="rgb(116, 116, 116)" class="border-bottom">
       <textField v-model="usernameInput" backgroundColor="rgb(116, 116, 116)" hint="Create Username" class="form-input" />
    </FlexboxLayout>

<FlexboxLayout alignItems="center" backgroundColor="rgb(116, 116, 116)" class="border-bottom">
       <textField v-model="passwordInput" backgroundColor="rgb(116, 116, 116)" hint="Create Password" secure="true" class="form-input" />
    </FlexboxLayout>

<Button text="Create Account" @tap="handleCreate" class="my-button" backgroundColor="rgb(224, 0, 0)" />

<FlexboxLayout alignItems="center" justifyContent="space-between" class="auth-buttons">
    <Button horizontalAlignment="left" backgroundColor="black" color="rgb(224, 0, 0)" text="Already have Account" @tap="goTologin"/>
    <Label horizontalAlignment="right" backgroundColor="black" color="rgb(224, 0, 0)" text="Forgot Password" />
</FlexboxLayout>
      </StackLayout>

      </FlexboxLayout>
  </Page>
</template>

<script lang="ts">
    import Vue from "nativescript-vue";
    import login from '../pages/login.vue';
    import create from '../pages/create.vue';
    import chome from '../pages/chome.vue';
    import {mapActions} from 'vuex'
    import chooseteam from '../pages/chooseteam.vue';

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
        ...mapActions(['createUser']),
        goTologin() {
            this.$navigateTo(login)
        },
        goTocreate() {
            this.$navigateTo(create)
        },
        goTochome() {
            this.$navigateTo(chome)
        },
        goTochooseteam() {
            this.$navigateTo(chooseteam)
        },
        handleCreate() {
            if(this.usernameInput.length > 5 && this.passwordInput.length > 5){
                console.log('got into handle create')
                this.createUser({
                    name:this.usernameInput,
                    password:this.passwordInput
                }) && this.goTochooseteam()
            }
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

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
  .border-bottom {
      border-bottom-width: 1;
      border-bottom-color: white;
      margin-bottom: 40;
    padding-bottom: 8;
  }
  .form-input {
      color: white;
      placeholder-color: white;
  }
  .icon-margin {
    margin-right: 10;
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
  .auth-buttons {
    color: white;
    font-size: 14;
  }
  .full-height {
    height: 100%;
  }
  .logo-container {
    width: 150;
    margin-bottom: 60;
  }
  .container {
    margin-left: 34;
    margin-right: 34;
  }
  .title {
    margin-left: 65;
    margin-right: 34; 
    margin-bottom: 250;
    font-family:'Fantasy', 'Papyrus';
  }
</style>
