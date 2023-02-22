<template>
  <div class="wrapper">
    <slot></slot>
    <div
      :class="{ menu__paddings: this.$store.state.scrollBarActive }"
      class="menu"
    >
      <div
        :class="{
          menu__sticky: this.$store.state.scrollBarActive,
          option_white: this.$store.state.optionTheme,
        }"
      >
        <div
          :class="{ active_option: this.$store.state.activeOption === 'op1' }"
          class="menu__option"
        >
          <h1>01</h1>
          <h2>Works</h2>
        </div>
        <div
          :class="{ active_option: this.$store.state.activeOption === 'op2' }"
          class="menu__option"
        >
          <h1>02</h1>
          <h2>Expertise</h2>
        </div>
        <div
          :class="{ active_option: this.$store.state.activeOption === 'op3' }"
          class="menu__option"
        >
          <h1>03</h1>
          <h2>Honors</h2>
        </div>
        <div
          :class="{ active_option: this.$store.state.activeOption === 'op4' }"
          class="menu__option"
        >
          <h1>04</h1>
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    sas() {
      this.isActive = this.$store.state.scrollBarActive;
    },
  },

  mounted() {
    this.sas();
  },
};
</script>

<style lang="scss" scoped>
.option_white {
  color: #e1e1e1;
}
.active_option {
  border-left: 4px solid #f35330;
}
.menu__paddings {
  margin-right: 8.7rem !important;
  margin-top: unset !important;
}
.menu__sticky {
  position: fixed;
  top: 9rem;
  right: 3rem;
}
.menu__active {
  position: fixed;
  top: 20%;
  right: 3%;
}
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 6rem;
}
.menu {
  margin-top: 3rem;
  margin-right: 3rem;
  .menu__option {
    display: flex;
    flex-direction: column;
    width: 10%;
    align-items: flex-start;
    height: 10rem;
    // border-left: 4px solid #f35330;
    justify-content: center;
    padding-left: 1.4rem;
    h1 {
      font-weight: 300;
    }
    h2 {
      font-weight: 600;
      line-height: 22px;
    }
  }
}
@media only screen and (max-width: 1500px) {
  .menu {
    display: none;
  }
}
@media only screen and (max-width: 900px) {
  .wrapper {
    margin-top: 4rem;
  }
}
</style>
