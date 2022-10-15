<template>
  <div class="bg-gray-bg py-[38px] px-[30px] rounded-[16px]">
    <ui-icon
      :name="icon"
      :width="iconWidth"
      :height="iconHeight"
      :fill="iconFill"
    />
    <span
      class="
        block
        text-blue text-[20px]
        leading-[140%]
        font-bold
        mb-[20px]
        mt-[30px]
      "
      >{{ data.CharCode }}</span
    >
    <p class="text-darkgray text-[16px] leading-[140%] mb-[35px]">
      {{ data.Name }}
    </p>
    <ul class="pl-[20px]">
      <li
        class="
          text-black text-[16px]
          leading-[20px]
          mb-[25px]
          relative
          before:absolute
          before:left-[-20px]
          before:top-1/2
          before:translate-y-[-50%]
          before:content-['']
          before:block
          before:w-[10px]
          before:h-[10px]
          before:rounded-full
          before:bg-transparent
          before:border-2
          before:border-solid
          before:border-red
        "
      >
        Номинал: {{ data.Nominal }}
      </li>
      <li
        class="
          text-gray-list text-[18px]
          leading-[20px]
          relative
          before:absolute
          before:left-[-20px]
          before:top-1/2
          before:translate-y-[-50%]
          before:content-['']
          before:block
          before:w-[10px]
          before:h-[10px]
          before:rounded-full
          before:bg-transparent
          before:border-2
          before:border-solid
          before:border-red
        "
      >
        Курс: {{ data.Value }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    iconWidth: [String, Number],
    iconHeight: [String, Number],
    iconFill: String,
    data: {
      CharCode: String,
      Name: String,
      Nominal: Number,
      Value: Number,
    },
  },
};
</script>

<style>
</style>