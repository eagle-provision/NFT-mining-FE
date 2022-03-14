<template>
  <div>
    <div class="bg-black">
      <nav
        class="
          container
          md:flex md:justify-center md:items-center
          
        "
      >
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
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-white
              "
            >
              <svg viewBox="0 0 20 20" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        
        <div class="header_hide">
          <div class="w-1/12"></div>
          <p class="text-white text-center uppercase md:p-20 sm:p-10" 
              style="font-size:100px; font-family:Bodoni Bd BT">babes</p>
      
        </div>
        <div class="hide">
          <div class="flex justify-start">
            <img src="./../assets/images/babes.png" class=""/>
          </div>  
        </div>
        <div class="w-6/12 flex justify-center space-x-4">
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
            <li class="text-xs font-bold text-white hover:text-pink-400">
              STORY
            </li>
            <li class="text-xs font-bold text-white hover:text-pink-400">
              CLUB
            </li>
            <li class="text-xs font-bold text-white hover:text-pink-400">
              CHARITYDONATION
            </li>
            <li class="text-xs font-bold text-white hover:text-pink-400">
              BOOBMAP
            </li>
            <li class="text-xs font-bold text-white hover:text-pink-400">
              FAQ
            </li>
            <li class="text-xs font-bold text-white hover:text-pink-400">
              CONTACT
            </li>
          </ul>
        </div>
        <div class="hide">
        <div class=" flex space-x-4 ">
          <img src="./../assets/images/connect_btn.png">
        </div>
        </div>
        <div class="w-1/12"></div>
      </nav>
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