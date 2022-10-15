<template>
  <label class="block">
    <span
      class="
        text-blue-dark text-[16px]
        font-medium
        leading-[19px]
        mb-[14px]
        block
      "
      >{{ label }}</span
    >
    <input
      :type="type || 'text'"
      :placeholder="placeholder"
      class="
        text-[14px]
        leading-[28px]
        text-blue
        placeholder:text-blue-light
        outline-none
        w-full
        border border-solid border-gray-border
        rounded-[5px]
        p-[20px]
      "
    />
  </label>
</template>

<script>
export default {
  props: {
    type: String,
    label: String,
    placeholder: String,
  },
};
</script>

<style>
</style>