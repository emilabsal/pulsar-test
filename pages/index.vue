<template>
  <main class="container mx-auto mt-[30px]">
    <h1 class="text-blue mb-[40px] text-[34px] font-medium leading-[40px]">
      Валютный калькулятор
    </h1>
    <div class="flex items-start gap-[36px] sm:flex-row flex-col">
      <the-form class="sm:basis-1/2 basis-full w-full" />
      <div
        class="
          basis-1/2
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
        <div class="flex gap-[30px] items-start sm:flex-row flex-col">
          <ul class="pl-[20px]">
            <li
              class="
                text-gray-list text-[18px]
                leading-[20px]
                mb-[30px]
                list-item
              "
              v-for="(item, index) in list"
              :key="index"
            >
              {{ item }}
            </li>
          </ul>
          <div
            class="
              sm:grid
              md:grid-cols-2
              sm:grid-cols-1
              gap-x-[15px] gap-y-[9px]
              max-w-[307px]
              sm:w-full
              w-auto
              flex
            "
          >
            <img
              v-for="(img, index) in images"
              :key="index"
              :src="require(`@/assets/img/windows/window${img}`)"
              alt="img"
              class="
                rounded-bl-[30px] rounded-tr-[30px]
                md:rounded-none
                sm:w-full
                xs:w-[25%]
                w-[20%]
              "
            />
          </div>
        </div>
      </div>
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
        md:flex-row
        flex-col
      "
    >
      <div class="max-w-[750px]">
        <p
          class="
            text-blue
            xs:text-[36px]
            text-[30px]
            leading-[46px]
            mb-[20px]
            font-medium
            sm:text-left
            text-center
          "
        >
          Нужна помощь?
          <span class="block">Мы поможем! Просто свяжитесь с нами.</span>
        </p>
        <p
          class="
            text-gray-list text-[16px]
            leading-[24px]
            sm:text-left
            text-center
          "
        >
          Наши специалисты с радостью ответят на все ваши вопросы и дадут
          профессиональную консультацию по товарам.
        </p>
      </div>
      <div class="flex flex-col items-center justify-center">
        <a
          class="
            text-blue
            font-medium
            xs:text-[50px]
            leading-[46px]
            whitespace-nowrap
            text-[24px]
          "
          href="tel:88008889028"
          >8 (800) 888-90-28</a
        >
        <span class="text-gray-list text-[24px] leading-[28px] mt-[20px]"
          >или</span
        >
        <a
          class="text-blue xs:text-[34px] leading-[40px] mt-[10px] text-[20px]"
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
