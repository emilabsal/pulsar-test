<template>
  <header
    class="bg-gray-background md:pt-[16px] md:pb-[15px] pt-[13px] pb-[14px]"
  >
    <nav class="container mx-auto">
      <ul class="flex items-center gap-[31px]">
        <li v-for="(link, index) in links" :key="index">
          <nuxt-link
            class="text-gray font-medium text-[12px] leading-[14px]"
            :to="link.link"
            >{{ link.title }}</nuxt-link
          >
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

<style scoped>
.nuxt-link-exact-active {
  color: var(--color-black);
}
</style>