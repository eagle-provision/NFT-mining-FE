<template>
  <div class="bg-black">
    <div class="hide">
      <div class="flex w-full  items-center bg-black" >
        <div class="w-1/12"></div>
        <div class="w-2/12 flex justify-end">
          <img src="./../assets/images/babes.png" class="left-0 "/>
        </div>
        <div class="w-6/12 flex justify-center space-x-4 items-center">
          <a href=""><p class="text-xs text-white hover:text-pink-500 ">STORY</p></a>
          <a href=""><p class="text-xs text-white hover:text-pink-500">CLUB</p></a>
          <a href=""><p class="text-xs text-white hover:text-pink-500">CHARITY DONATION</p></a>
          <a href=""><p class="text-xs text-white hover:text-pink-500">BOOB MAP</p></a>
          <a href=""><p class="text-xs text-white hover:text-pink-500">FAQ</p></a>
          <a href=""><p class="text-xs text-white hover:text-pink-500">CONTACT</p></a>
        </div>
        <div class="w-2/12 flex space-x-4">
           <img src="./../assets/images/connect_btn.png">
        </div>
        <div class="w-1/12"></div>
      </div>
    </div>
    <div class="header_hide">
      
      <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            "
            >
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-white
              "
            >
              <img src="./../assets/images/Group68.png" style="">
            </button>
          </div>
        </div>
        <p class="md:hidden text-white text-center uppercase pb-1 title_font" 
              style="font-size:90px; font-family:Bodoni Bd BT pt-10">babes</p>
        <div class="flex justify-center space-x-4">
              <ul
                :class="showMenu ? 'flex' : 'hidden' "
                class="
                  flex-col
                  mt-8
                  space-y-4
                  md:flex
                  md:space-y-0
                  md:flex-row
                  md:items-center
                  md:space-x-2
                  md:mt-0
                  justify-center
                "
              >
                <li class="text-2xs font-bold text-white hover:text-pink-400 text-center">
                  STORY
                </li>
                <li class="text-2xs font-bold text-white hover:text-pink-400 text-center">
                  CLUB
                </li>
                <li class="text-2xs font-bold text-white hover:text-pink-400 text-center">
                  CHARITY DONATION
                </li>
                <li class="text-2xs font-bold text-white hover:text-pink-400 text-center">
                  BOOB MAP
                </li>
                <li class="text-2xs font-bold text-white hover:text-pink-400 text-center">
                  FAQ
                </li>
                <li class="text-2xs font-bold text-white hover:text-pink-400 text-center">
                  CONTACT
                </li>
              </ul>
            </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showMenu: false,
      };
    },
    methods: {
      toggleNav: function () {
        this.showMenu = !this.showMenu;
      },
    },
  };
</script>