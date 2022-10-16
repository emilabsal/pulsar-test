<template>
  <form>
    <ui-input
      @input-event="onCurrOne"
      class="mb-[31px]"
      label="Валюта 1"
      placeholder="Введите название или код"
    />
    <ui-input
      @input-event="onCurrTwo"
      class="mb-[31px]"
      label="Валюта 2"
      placeholder="Введите название или код"
    />
    <ui-input
      @input-event="onQuantity"
      class="mb-[31px]"
      label="Количество"
      placeholder="Введите число"
      type="number"
    />
    <the-info :text="`Итого: ${total}`" icon="info" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      code1: "",
      code2: "",
      nominal: "",
      api: "",
      curr1: "",
      curr1Value: "",
      curr2: "",
      curr2Value: "",
      quantity: 0,
      total: "...",
    };
  },
  async fetch() {
    if (this.api === "") {
      this.mountains = await this.$axios
        .get("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((res) => {
          this.api = res.data.Valute;
          this.api = Object.values(this.api);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
  methods: {
    onCurrOne(value) {
      this.curr1 = value;
      this.code1 = this.api.find(
        (el) => el.CharCode.toLowerCase() === this.curr1.toLowerCase()
      );

      if (this.code1) {
        this.curr1Value = this.code1.Value;
        this.nominal = this.code1.Nominal;
      }

      this.countTotal();
    },
    onCurrTwo(value) {
      this.curr2 = value;
      this.code2 = this.api.find(
        (el) => el.CharCode.toLowerCase() === this.curr2.toLowerCase()
      );

      if (this.code2) {
        this.curr2Value = this.code2.Value;
      }

      this.countTotal();
    },
    onQuantity(value) {
      this.quantity = value;
      this.countTotal();
    },
    countTotal() {
      if (this.code1 && this.code2 && this.quantity !== 0 && this.quantity) {
        this.total =
          (this.quantity * this.curr1Value) / this.curr2Value / this.nominal;
      } else {
        this.total = "...";
      }
    },
  },
};
</script>
