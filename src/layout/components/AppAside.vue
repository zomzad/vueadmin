<template>
  <div class="app-aside">
    <el-menu :default-active="activeIndex" @select="handleItemSelect">
      <div v-for="menuItem in menuList" v-bind:key="menuItem">
        <el-menu-item
          class="app-aside__menu-item"
          :index="menuItem.name"
          :key="menuItem.name"
        >
          <i :class="['app-aside__icon', `${menuItem.meta.icon}`]" />
          <span>{{ menuItem.meta.title }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AppAside",
  computed: {
    menuList() {
      debugger;
      return this.$router.options.routes[0].children;
    },
  },
  data() {
    return {
      activeIndex: this.$route.name,
    };
  },
  methods: {
    handleItemSelect(index) {
      if (this.activeIndex !== index) {
        this.activeIndex = index;
        this.$router.push({ name: index });
      }
    },
  },
};
</script>

<style lang="scss">
.app-aside {
  &__icon {
    margin-right: 1rem;
  }
  &__menu-item {
    padding-left: 1.4rem;
    color: rgb(191, 203, 217);
    background-color: rgb(48, 65, 86);
    &:hover,
    &:focus {
      background-color: #263445;
    }
  }
}
</style>
