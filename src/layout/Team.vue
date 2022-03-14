<template>
<div class="" style="background: linear-gradient(90deg, #38C9EE 0.79%, #300578 98.25%);">
    <div class="hide">
        <div class="items-center ">
            <div class=" flex justify-center">
                <div class="flex justify-between w-8/12">
                    <p class="text-white text-4xl pt-5 pb-5 title_font" style="font-family:Bodoni Bd BT">The Team</p>
                </div>
            </div>
            <div class="flex justify-center space-x-5">
                <button @click="moveLeft()">Left</button>
                <div class="frame w-8/12 ">
                    <div class="contain justify-between space-x-5" :style="{position: 'absolute',left: (widthFrame) + 'px', transition: 'left 1.5s'}">
                    <img  src="../assets/images/2.png" style="width:25%; height:25%;" alt="">
                    <img  src="../assets/images/3.png" style="width:25%; height:25%;" alt="">
                    <img  src="../assets/images/4.png" style="width:25%; height:25%;" alt="">
                    <img  src="../assets/images/3.png" style="width:25%; height:25%;" alt="">
                    <img  src="../assets/images/2.png" style="width:25%; height:25%;" alt="">
                    <img  src="../assets/images/3.png" style="width:25%; height:25%;" alt="">
                    <img  src="../assets/images/4.png" style="width:25%; height:25%;" alt="">
                    <img  src="../assets/images/3.png" style="width:25%; height:25%;" alt="">

                    
            
                    </div>
                </div>
                <button @click="moveRight()">Right</button>
            </div>
        </div>
    </div>
</div>
</template>
  
  <script>
  export default {
    watch: {
    },
    data(){
      return{
        currentImg: 1,
        widthFrame: 0,
      }
    },
    methods: {
      moveRight: function(){
        if (this.currentImg <= 2) {this.widthFrame = this.widthFrame - 1000; this.currentImg++;}
      },
      moveLeft: function(){
        if (this.currentImg >= 2) {this.widthFrame = this.widthFrame + 1000;this.currentImg--;}
      },
    },
    name: 'slider',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  *{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
  
  .frame{
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 400px;
  }
  .contain{
    display: flex;
  }
  
  
  
  </style>