<template>
  <div>
    <div class="text text_expertise">
      <h1>My Expertise</h1>
    </div>
    <div class="expertise">
      <div
        class="technologies"
        @mouseenter="`${this.$refs.figma.classList.add('label-active')}`"
        @mouseleave="`${this.$refs.figma.classList.remove('label-active')}`"
      >
        <div class="line line_up"></div>
        <img src="../assets/logo-figma.svg" alt="" />
        <div class="figma label" ref="figma">
          <!-- style="position: relative; left: 15rem" -->
          <h2>figma</h2>
          <h1>24%</h1>
        </div>
        <div class="line line_down"></div>
      </div>
      <div
        class="technologies"
        @mouseenter="`${this.$refs.xd.classList.add('label-active')}`"
        @mouseleave="`${this.$refs.xd.classList.remove('label-active')}`"
      >
        <div class="line line_up"></div>
        <img src="../assets/logo-xd.svg" alt="" />
        <div class="xd label" ref="xd">
          <h2>xd</h2>
          <h1>24%</h1>
        </div>
        <div class="line line_down"></div>
      </div>
      <div
        class="technologies"
        @mouseenter="`${this.$refs.ai.classList.add('label-active')}`"
        @mouseleave="`${this.$refs.ai.classList.remove('label-active')}`"
      >
        <div class="line line_up"></div>
        <img src="../assets/logo-illustrator.svg" alt="" />
        <div class="ai label" ref="ai">
          <h2>ai</h2>
          <h1>24%</h1>
        </div>
        <div class="line line_down"></div>
      </div>
      <div
        class="technologies"
        @mouseenter="`${this.$refs.ps.classList.add('label-active')}`"
        @mouseleave="`${this.$refs.ps.classList.remove('label-active')}`"
      >
        <div class="line line_up"></div>
        <img src="../assets/logo-photoshop.svg" alt="" />
        <div class="ps label" ref="ps">
          <h2>ps</h2>
          <h1>24%</h1>
        </div>
        <div class="line line_down"></div>
      </div>
      <div
        class="technologies"
        @mouseenter="`${this.$refs.js.classList.add('label-active')}`"
        @mouseleave="`${this.$refs.js.classList.remove('label-active')}`"
      >
        <div class="line line_up"></div>
        <img src="../assets/logo-js.svg" alt="" />
        <div class="javascript label" ref="js">
          <h2>javascript</h2>
          <h1>24%</h1>
        </div>
        <div class="line line_down"></div>
      </div>
      <div
        class="technologies"
        @mouseenter="`${this.$refs.html.classList.add('label-active')}`"
        @mouseleave="`${this.$refs.html.classList.remove('label-active')}`"
      >
        <div class="line line_up"></div>
        <img src="../assets/logo-html5.svg" alt="" />
        <div class="html label" ref="html">
          <h2>html</h2>
          <h1>24%</h1>
        </div>
        <div class="line line_down"></div>
      </div>
      <div
        class="technologies"
        @mouseenter="`${this.$refs.sass.classList.add('label-active')}`"
        @mouseleave="`${this.$refs.sass.classList.remove('label-active')}`"
      >
        <div class="line line_up"></div>
        <img src="../assets/logo-sass.svg" alt="" />
        <div class="sass label" ref="sass">
          <h2>sass</h2>
          <h1>24%</h1>
        </div>
        <div class="line line_down"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  transition: all 0.5s;
}
.text {
  display: flex;
  margin-right: 10rem;
  flex-direction: row;
  justify-content: flex-end;
  height: 250px;
  h1 {
    font-family: "Playfair Display";
    color: #f35330;

    font-size: 112px;
    margin-right: 10rem;
    @media only screen and (max-width: 900px) {
      font-size: 80px;
    }
    @media only screen and (max-width: 500px) {
      font-size: 50px;
    }
  }
  h3 {
    font-size: 18px;
    width: 587px;
    line-height: 150%;
    text-align: left;
  }
}
.text_expertise {
  height: 125px !important;
}
.expertise {
  display: flex;
  justify-content: center;
  .technologies:hover {
    .line {
      width: 8px;
    }
    .line_up {
      background: linear-gradient(0deg, #f35330 60%, #f2f2f2 100%);
    }
    .line_down {
      background: #f35330;
    }
  }
  .technologies {
    margin: 0 1rem;
    img {
      width: 100%;
    }
    .line_up {
      background: linear-gradient(0deg, #a1a1a1 7%, #f2f2f2 75%);
    }
    .line_down {
      background: linear-gradient(
        0deg,
        rgba(242, 242, 242, 1) 5%,
        rgba(161, 161, 161, 1) 70%
      );
    }
    .line {
      height: 200px;
      margin-left: 50%;
      width: 2px;
    }
  }
}

.label-active {
  display: block !important;
  margin: 2rem;
}
.label {
  background: white;
  position: absolute;
  display: none;
  padding: 1rem 2rem;
  box-shadow: 0px 20px 32px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  text-align: start;

  h2 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 20px;
  }
  h1 {
    font-weight: 700;
    font-size: 20px;
    color: #f35330;
  }
}
.labels {
  position: absolute;

  bottom: -78rem;
}
@media only screen and (max-width: 1200px) {
  .label {
    background: black;

    padding: 1rem 1rem;
    // box-shadow: 8px 31px 39px rgb(0 0 0 / 8%);
    border-radius: 7px;
    h2 {
      display: none;
    }
    h1 {
      font-size: 16px;
      color: white;
      opacity: 0.9;
    }
  }
  .text {
    margin-right: unset;
    flex-direction: unset;
    justify-content: center;
    height: unset !important;
    margin: 1rem;
    h1 {
      margin-right: unset;
    }
  }
  .expertise {
    flex-direction: column;
    .technologies {
      margin: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .line {
        height: 2px;
        margin-left: unset;
        width: 50%;
      }
      img {
        width: 20% !important;
      }
    }
  }
}
</style>
