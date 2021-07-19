<template>
<Page>
    <ActionBar title="Choose Characters" fontFamily="Fantasy, Papyrus"  backgroundColor="black" class="action-bar" />

    <ScrollView backgroundColor="black">
			<ListView for="item in rosterList" class="list-group" @itemTap="onItemTap">
				<v-template>
					<GridLayout class="list-group-item" rows="*" columns="auto, *">
						<Image row="0" col="0" :src="item.src" width="250" height="250" />
						<Label row="0" col="1" :text="item.text" fontWeight="bold"/>
					</GridLayout>
				</v-template>
			</ListView>
		</ScrollView>
  
</Page>
</template>


<script lang="ts">
  import login from '../pages/login.vue';
  import create from '../pages/create.vue';
  import roster from '../pages/roster.vue';
  import {mapState} from 'vuex';
  

export default {
  data() {
    return {
      items: [
        { text: "Black Dragon", src: "https://free3d.com/imgd/raw64413-black-dragon-rigged-and-game-ready-92023.jpg" },
        { text: "White Dragon", src: "https://free3d.com/imgd/raw54327-dinodragon-1032.jpg" },
        { text: "Red Dragon", src: "https://preview.free3d.com/img/2016/04/2279488985724093657/j2qgrxl7-900.jpg" },
        { text: "Alien", src: "https://free3d.com/imgd/raw46/5e331c8626be8bdc188b4567/9094-alien-animal-update-in-blender-28x.png" },
        { text: "Monkey", src: "https://free3d.com/imgd/l39/596539.jpg" }
      ]
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
        },
        onItemTap: function(event) {
            console.log("You tapped:"); 
        },
    },
    computed:{
        ...mapState(['activeUser']),
        rosterList(){
            return this.activeUser.roster
        }
    }
  };
</script>

<style scoped lang="scss">

  // Custom styles
  
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