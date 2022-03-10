<template>
  <div class="flex items-center">
    <img :src="info.avatar" class="w-10 h-10 mr-2 flex-shrink-0 rounded-full" />
    <div class="flex flex-col text-sm">
      <span>{{info.name}}</span>
      <span class="text-gray-500">{{info.role}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaffCard",
  components: {},
  props: ['info']
}
</script>