<template>
  <scroll-menu>
    <div class="slot">
      <div ref="option" class="option option_01">
        <option-one></option-one>
      </div>
      <div ref="option" class="option option_02">
        <option-two></option-two>
      </div>

      <div ref="option" class="option option_03">
        <option-three></option-three>
      </div>
      <div ref="option" class="option option_04">
        <option-four></option-four>
      </div>
    </div>
  </scroll-menu>
</template>

<script>
import ScrollMenu from "./ScrollMenu.vue";
import OptionFour from "./OptionFour.vue";
import OptionThree from "./OptionThree.vue";
import OptionTwo from "./OptionTwo.vue";
import OptionOne from "./OptionOne.vue";
export default {
  data() {
    return {};
  },
  components: {
    ScrollMenu,
    OptionFour,
    OptionThree,
    OptionTwo,
    OptionOne,
  },
  methods: {
    close(op) {
      op.status = false;
    },
    scrollTriger() {
      const op1Observer = new IntersectionObserver((e) => {
        e.forEach((en) => {
          en.isIntersecting ? this.obs("op1") : false;
        });
      });
      const op2Observer = new IntersectionObserver((e) => {
        e.forEach((en) => {
          en.intersectionRect.y > 0
            ? (this.$store.state.scrollBarActive = true)
            : false;

          en.isIntersecting ? this.obs("op2") : false;
        });
      });

      const op3Observer = new IntersectionObserver((e) => {
        e.forEach((en) => {
          en.isIntersecting ? this.obs("op3") : false;
        });
      });
      const op4Observer = new IntersectionObserver((e) => {
        e.forEach((en) => {
          if (en.isIntersecting) {
            this.obs("op4");
            this.$store.state.optionTheme = true;
          }
        });
      });
      op1Observer.observe(document.querySelector(".option_01"));
      op2Observer.observe(document.querySelector(".option_02"));
      op3Observer.observe(document.querySelector(".option_03"));
      op4Observer.observe(document.querySelector(".option_04"));
    },
    obs(option) {
      this.$store.state.activeOption = option;
      this.$store.state.optionTheme = false;
    },
  },
  mounted() {
    setTimeout(() => {
      this.scrollTriger();
    }, 100);
  },
};
</script>

<style scoped lang="scss">
* {
  transition: all 0.4s;
}

.slot {
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 600px;
}
@media only screen and (max-width: 900px) {
  .option {
    border-top: 1px solid;
    padding: 2rem 0;
  }
  .option_04 {
    border-top: unset;
    padding: unset;
  }
}
</style>
