<template>
  <paginate
    v-model="currentPage"
    :page-count="pageCount"
    :margin-pages="marginPages"
    :page-range="pageRange"
    :container-class="'flex'"
    :prev-link-class="`flex fa fa-angle-left w-8 h-8 items-center justify-center box-content rounded mx-1 text-lg mr-5 ${
      currentPage === 1 && `text-gray-300`
    }`"
    :next-link-class="`flex fa fa-angle-right w-8 h-8 items-center justify-center box-content rounded mx-1 text-lg ml-5 ${
      currentPage === pageCount && `text-gray-300`
    }`"
    :prev-text="''"
    :next-text="''"
    :active-class="'bg-primary text-white'"
    :page-class="'w-8 h-8 flex items-center justify-center box-content rounded mx-1 text-sm'"
  >
  </paginate>
</template>

<script>
import "font-awesome/css/font-awesome.min.css";
import Paginate from "vuejs-paginate";

export default {
  name: "Pagination",
  components: {
    Paginate,
  },
  data() {
    return {
      windowWidth: 0,
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 640) {
      this.marginPages = 1;
      this.pageRange = 2;
    }
  },
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    pageCount: Number,
    marginPages: {
      type: Number,
      default: 3,
    },
    pageRange: {
      type: Number,
      default: 3,
    },
  },
};
</script>
