<template>
  <Page>
<FlexboxLayout backgroundColor="black" flexDirection="column" justifyContent="center" class="full-height">
<StackLayout class="container">

<FlexboxLayout alignItems="center" backgroundColor="rgb(116, 116, 116)" class="border-bottom">
       <textField v-model="forgotpasswordInput" backgroundColor="rgb(116, 116, 116)" color="white" hint="Enter in Email Address" class="form-input" />
    </FlexboxLayout>


<Button text="Login" @tap="goTologin" class="my-button" backgroundColor="rgb(224, 0, 0)"/>



</StackLayout>
</FlexboxLayout>
</Page>
</template>



<script lang="ts">
  import login from '../pages/login.vue';
    export default {
        methods: {
            goTologin() {
                this.$navigateTo(login)
            }
        },
    }
</script>

<style scoped lang="scss">
  @import '@nativescript/theme/scss/variables/blue';

.form-input {
      color: white;
      placeholder-color: white;
  }
</style>
