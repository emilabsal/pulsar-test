<template>
  <form>
    <ui-input
      :disabled="disabled"
      @input-event="onCurrOne"
      class="mb-[31px]"
      label="Валюта 1"
      placeholder="Введите код"
    />
    <ui-input
      :disabled="disabled"
      @input-event="onCurrTwo"
      class="mb-[31px]"
      label="Валюта 2"
      placeholder="Введите код"
    />
    <ui-input
      :disabled="disabled"
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
      disabled: false,
      code1: "",
      code2: "",
      nominal: "",
      curr1: "",
      curr1Value: "",
      curr2: "",
      curr2Value: "",
      quantity: 0,
      total: "...",
    };
  },
  async fetch() {
    if (this.valute === "") {
      this.disabled = true;
      this.mountains = await this.$store
        .dispatch("getValute")
        .then(() => {
          this.disabled = false;
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
  computed: {
    valute() {
      return this.$store.getters.valute;
    },
  },
  methods: {
    onCurrOne(value) {
      this.curr1 = value.trim();
      this.code1 = this.valute.find(
        (el) => el.CharCode.toLowerCase() === this.curr1.toLowerCase()
      );

      if (this.code1) {
        this.curr1Value = this.code1.Value;
        this.nominal = this.code1.Nominal;
      }

      this.countTotal();
    },
    onCurrTwo(value) {
      this.curr2 = value.trim();
      this.code2 = this.valute.find(
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
