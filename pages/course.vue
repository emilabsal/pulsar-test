<template>
  <div class="container mx-auto mt-[30px]">
    <h1 class="text-blue mb-[40px] text-[34px] font-medium leading-[40px]">
      Курс рубля
    </h1>
    <div class="grid grid-cols-custom gap-[30px] mb-[30px]">
      <the-card
        icon="money"
        :data="item"
        v-for="(item, index) in api"
        :key="index"
        :odd="Object.keys(api).indexOf(index) % 2 === 0 ? false : true"
      />
    </div>
    <the-info
      class="!bg-gray-bg mb-[92px]"
      icon="info"
      iconFill="var(--color-blue)"
      text="Телефон: 8 (800) 888-90-28, email: info@example.ru."
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      api: "",
    };
  },
  async fetch() {
    if (this.api === "") {
      this.mountains = await this.$axios
        .get("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((res) => {
          this.api = res.data.Valute;
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
};
</script>
