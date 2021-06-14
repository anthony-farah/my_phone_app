<template>
  <Page>
<FlexboxLayout backgroundColor="black" flexDirection="column" justifyContent="center" class="full-height"> 
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
  .fas {
    @include colorize($color: accent);
  }
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