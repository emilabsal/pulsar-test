<template>
  <main class="container mx-auto mt-[30px]">
    <h1 class="text-blue mb-[40px] text-[34px] font-medium leading-[40px]">
      Валютный калькулятор
    </h1>
    <div
      class="
        grid grid-cols-2
        gap-x-[36px] gap-y-[41px]
        content-start
        items-start
      "
    >
      <the-form />

      <div
        class="
          row-span-2
          px-[30px]
          py-[39px]
          bg-blue-background
          border border-solid border-blue-background
          rounded-[16px]
        "
      >
        <h2
          class="
            text-blue text-[18px]
            leading-[24px]
            font-medium
            uppercase
            mb-[51px]
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor:
        </h2>
        <div class="flex gap-[30px] items-start">
          <ul class="pl-[20px]">
            <li
              class="
                text-gray-list text-[18px]
                leading-[20px]
                mb-[30px]
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
              v-for="(item, index) in list"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
          <div
            class="
              grid grid-cols-2
              gap-x-[15px] gap-y-[9px]
              max-w-[307px]
              w-full
            "
          >
            <img
              v-for="(img, index) in images"
              :key="index"
              :src="require(`@/assets/img/windows/window${img}`)"
              alt="img"
            />
          </div>
        </div>
      </div>
      <the-info text="Итого:" icon="info" />
    </div>
    <div
      class="
        flex
        px-[51px]
        py-[65px]
        bg-blue-background
        mt-[40px]
        rounded-[16px]
        justify-between
        items-center
        gap-[50px]
        mb-[136px]
      "
    >
      <div>
        <p class="text-blue text-[36px] leading-[46px] mb-[30px] font-medium">
          Нужна помощь?
          <span class="block">Мы поможем! Просто свяжитесь с нами.</span>
        </p>
        <p class="text-gray-list text-[16px] leading-[24px]">
          Наши специалисты с радостью ответят на все ваши вопросы и дадут
          профессиональную консультацию по товарам.
        </p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <a
          class="
            text-blue
            font-medium
            text-[50px]
            leading-[46px]
            whitespace-nowrap
          "
          href="tel:88008889028"
          >8 (800) 888-90-28</a
        >
        <span class="text-gray-list text-[24px] leading-[28px] mt-[20px]"
          >или</span
        >
        <a
          class="text-blue text-[34px] leading-[40px] mt-[10px]"
          href="mailto:info@example.ru"
          >info@example.ru</a
        >
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      list: [
        "incididunt ut labore et dolore magna aliqua",
        "incididunt ut labore et",
        "incididunt ut labore et dolore",
        "labore et dolore",
        "incididunt ut",
        "incididunt ut labore et dolore",
        "incididunt ut labore",
      ],
      images: ["1.png", "2.png", "3.png", "4.png"],
    };
  },
};
</script>
