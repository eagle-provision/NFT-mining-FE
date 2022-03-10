<template>
  <div class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-5">
    <div class="border rounded">
      <div class="h-32 py-1.5 flex items-center justify-center box-content">
        <img :src="site.avatar" />
      </div>
      <div class="border-t bg-whiteprimary p-5">
        <p class="flex justify-between text-xxs uppercase text-gray-400 font-bold mb-1">
          <span>project</span>
          <span>{{site.updated}}</span>
        </p>
        <p class="text-xl mb-6">{{site.name}}</p>
        <div class="flex pl-4 mb-6">
          <img v-for="(user, index) in site.contributors.slice(0, 5)" :src="user" :key="index" class="w-8 h-8 border-2 border-white box-content rounded-full -ml-4" />
          <div v-if="site.contributors.length > 5" class="w-8 h-8 box-content border-2 border-white flex items-center justify-center text-gray-400 rounded-full -ml-4 bg-gray-50">
            {{site.contributors.length - 5}}+
          </div>
        </div>
        <button class="w-full h-10 border rounded text-sm font-medium text-gray-500">Settings</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteCard',
  components: {},
  props: ['site']
}
</script>