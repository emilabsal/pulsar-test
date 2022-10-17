<template>
  <div class="container mx-auto mt-[30px]">
    <h1 class="text-blue mb-[40px] text-[34px] font-medium leading-[40px]">
      Курс рубля
    </h1>
    <div class="grid grid-cols-custom lg:gap-[30px] gap-[15px] mb-[30px]">
      <the-card
        icon="money"
        :data="item"
        v-for="(item, index) in valute"
        :key="index"
        :odd="index % 2 === 0 ? false : true"
      />
    </div>
    <the-info
      class="!bg-gray-background mb-[92px]"
      icon="info"
      iconFill="var(--color-blue)"
      text="Телефон: 8 (800) 888-90-28, email: info@example.ru."
    />
  </div>
</template>

<script>
export default {
  async fetch() {
    if (this.valute === "") {
      this.mountains = await this.$store.dispatch("getValute").catch((e) => {
        console.log(e);
      });
    }
  },
  computed: {
    valute() {
      return this.$store.getters.valute;
    },
  },
};
</script>
