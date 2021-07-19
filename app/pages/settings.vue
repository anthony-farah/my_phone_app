<template>
  <Page>
<FlexboxLayout backgroundImage="https://c4.wallpaperflare.com/wallpaper/733/88/989/dark-black-and-white-abstract-black-background-wallpaper-preview.jpg" flexDirection="column" justifyContent="center" class="full-height"> 
<StackLayout class="container">
<Switch checked="true" v-model="itemEnabled" />
<Label 
text="Music"
textAlignment="center"
fontSize="20"
fontWeight="bold"
fontFamily="Fantasy, Papyrus"
color="rgb(224, 0, 0)"
/>
<Switch checked="true" v-model="itemEnabled" />
<Label 
text="Sound Effects"
textAlignment="center" 
fontSize="20"
fontWeight="bold"
fontFamily="Fantasy, Papyrus"
color="rgb(224, 0, 0)"
/>
</StackLayout>





</FlexboxLayout>


</Page>
</template>








<style scoped lang="scss">
  @import '@nativescript/theme/scss/variables/blue';

  // Custom styles
  
  .full-height {
    height: 100%;
  }
  .container {
    margin-left: 34;
    margin-right: 34;
  }
  .container2 {
    margin-left: 34;
    margin-right: 34;
  }
</style>