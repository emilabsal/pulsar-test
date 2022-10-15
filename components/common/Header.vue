<template>
  <header class="bg-gray-bg pt-[16px] pb-[17px]">
    <nav class="container mx-auto">
      <ul class="flex items-center gap-[31px]">
        <li v-for="(link, index) in links" :key="index">
          <nuxt-link class="text-gray" :to="link.link">{{
            link.title
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { link: "/", title: "Калькулятор" },
        { link: "/course", title: "Курс рубля" },
      ],
    };
  },
};
</script>
