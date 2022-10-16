<template>
  <div
    class="
      bg-gray-background
      lg:py-[38px] lg:px-[30px]
      py-[30px]
      px-[24px]
      rounded-[16px]
      hover:shadow-card
      transition-shadow
    "
  >
    <ui-icon name="money" :fill="odd ? '#E02025' : '#0F4471'" />
    <span
      class="
        block
        text-blue text-[20px]
        leading-[140%]
        font-bold
        mb-[15px]
        mt-[20px]
      "
      >{{ data.CharCode }}</span
    >
    <p class="text-darkgray text-[16px] leading-[140%] mb-[20px]">
      {{ data.Name }}
    </p>
    <ul class="pl-[20px]">
      <li
        class="
          text-list text-[16px]
          leading-[20px]
          font-medium
          mb-[15px]
          list-item
        "
      >
        Номинал: {{ data.Nominal }}
      </li>
      <li class="text-list text-[16px] leading-[20px] font-medium list-item">
        Курс: {{ data.Value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    odd: {
      type: Boolean,
      default: false,
    },
    data: {
      CharCode: String,
      Name: String,
      Nominal: Number,
      Value: Number,
    },
  },
};
</script>
