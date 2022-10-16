<template>
  <div
    class="
      rounded-[16px]
      py-[36px]
      px-[31px]
      bg-blue-background
      xs:items-center
      flex
      gap-[33px]
      xs:flex-row
      flex-col
      items-start
    "
  >
    <ui-icon
      class="shrink-0"
      :name="icon"
      :width="iconWidth"
      :height="iconHeight"
      :fill="iconFill"
    />
    <p class="text-[24px] font-bold leading-[140%] text-blue">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    icon: String,
    iconWidth: [String, Number],
    iconHeight: [String, Number],
    iconFill: String,
  },
};
</script>
