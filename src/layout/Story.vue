<template>
    <div class="bg-black xl:flex items-center pt-20 pb-20">
        <div class="xl:w-1/12 "></div>
        <div class="xl:w-4/12  basi_text st_text story">
            <p class="text-white font-bold " style="font-family:Bodoni Bd BT;font-size:38px; ">Story</p>
            <p class="text-white mt-10" style="font-size:16px;">The Meta Babe Club  is a collection of 7,777 magazines each featuring the hottest meta babes on the etherverse. Hand selected, to be featured as a cover page model Meta Babe must wear something appealing and breathtaking
                Babes are uniquely selected with over 100+ possible attributes and traits like background, skin color, clothes, mouth piece, hair style, and much more</p>
        </div>
        <!-- <div class="xl:w-7/12 flex items space-x-4 xl:justify-start md:justify-center card mx-10">
            <img src="./../assets/images/Group2.png" class="card_hide" style="width:310px;height:310px;"/>
            <img src="./../assets/images/Group3.png" class="card_hide" style="width:310px;height:310px;"/>
            <img src="./../assets/images/babes_sh.png" class="card_hide" />
        </div> -->
        <!-- <img src="./../assets/images/2.png">
        <img src="./../assets/images/3.png" > -->
        <div class="hide">
            <div class="xl:w-7/12 flex justify-center ">
                <mdb-carousel
                :items="4"
                multi
                slide
                controlls
                indicators
                indicatorsColor="secondary-color"
                navColor="secondary"
                :interval="8000"
                >
                <template v-for="(i, index) in items" #[index+1]>
                    <div :key="index" style="cursor: pointer">
                    <mdb-row
                        md="2"
                        class="d-md-inline-block px-2"
                        @click.native="showLightbox(i)"
                    >
                        <figure>
                        <img :src="imgs[i]" class="img-fluid" alt />
                        </figure>
                    </mdb-row>
                    <mdb-row
                        md="4"
                        class="d-md-inline-block px-2"
                        @click.native="showLightbox(i + 1)"
                    >
                        <figure>
                        <img :src="imgs[i+1]" class="img-fluid" alt />
                        </figure>
                    </mdb-row>
                    </div>
                </template>
                </mdb-carousel>

                <mdb-lightbox
                :visible="visible"
                :imgs="imgs"
                :index="index"
                @hide="handleHide"
                ></mdb-lightbox>
            </div>
        </div>


        <div class="">
            <img src="./../assets/images/Maskgroup.png" class="header_hide"/>
        </div>
    </div>
</template>

<script>
  import { mdbCarousel, mdbLightbox, mdbRow } from "mdbvue";
  export default {
    name: "CarouselPage",
    components: {
      mdbCarousel,
      mdbLightbox,
      mdbRow
    },
    data() {
      return {
        imgs: [
          "/img/Group2.3a4099ed.png",
          "/img/Group3.92aa5dd7.png",
          "/img/Group2.3a4099ed.png",
          "/img/Group3.92aa5dd7.png",
          "/img/Group2.3a4099ed.png",
          "/img/Group3.92aa5dd7.png",
          "/img/Group2.3a4099ed.png",
          "/img/Group3.92aa5dd7.png",
          
        ],
        visible: false,
        index: 0
      };
    },
    methods: {
      showLightbox(index) {
        this.index = index;
        this.visible = true;
      },
      handleHide() {
        this.visible = false;
      }
    },
    computed: {
      items() {
        return this.imgs
          .map((_, i) => i)
          .filter((_, i) => i % 2 === 0);
      }
    }
  };
</script>