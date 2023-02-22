<template>
  <div>
    <div
      style="cursor: pointer"
      class="pr_active__text"
      @click="this.$store.state.yearMenu.status = true"
      v-if="this.$store.state.active.status"
    >
      <h1 class="text__orange">Works - {{ this.$store.state.active.year }}</h1>
      <img src="../assets/down_arr.svg" alt="" />
    </div>
    <div class="text" v-else>
      <h1 class="text__orange">Works</h1>
      <h3>
        Pretium cursus gravida lorem scelerisque ultricies viverra velit dui.
        Sit mi risus ultricies faucibus et risus vulputate. Vulputate mauris
        donec consectetur augue. In tristique et pulvinar diam posuere ipsum non
        a vivamus.
      </h3>
    </div>
  </div>
  <div class="year__menu" v-if="this.$store.state.yearMenu.status">
    <div class="year__menu__close">
      <img
        @click="close(this.$store.state.yearMenu)"
        src="../assets/closebtn.svg"
        alt=""
      />
    </div>
    <ul class="year__menu__list">
      <li
        :class="{ year__menu_active: this.$store.state.active.year === '2022' }"
        @click="this.$store.state.active.year = '2022'"
      >
        <h1>2022</h1>
        <h2>5 PROJECTS</h2>
      </li>
      <li
        :class="{ year__menu_active: this.$store.state.active.year === '2021' }"
        @click="this.$store.state.active.year = '2021'"
      >
        <h1>2021</h1>
        <h2>15 PROJECTS</h2>
      </li>
      <li
        :class="{ year__menu_active: this.$store.state.active.year === '2020' }"
        @click="this.$store.state.active.year = '2020'"
      >
        <h1>2020</h1>
        <h2>13 PROJECTS</h2>
      </li>
      <li
        :class="{ year__menu_active: this.$store.state.active.year === '2019' }"
        @click="this.$store.state.active.year = '2019'"
      >
        <h1>2019</h1>
        <h2>7 PROJECTS</h2>
      </li>
      <li
        :class="{ year__menu_active: this.$store.state.active.year === '2018' }"
        @click="this.$store.state.active.year = '2018'"
      >
        <h1>2018</h1>
        <h2>12 PROJECTS</h2>
      </li>
    </ul>
  </div>
  <div
    :class="{ opacity__muted: this.$store.state.yearMenu.status }"
    v-if="this.$store.state.active.status"
    class="projects"
  >
    <div class="left_arr">
      <img src="../assets/left_arr.png" alt="" />
    </div>
    <div class="pr__wrapper">
      <div class="projects__cards">
        <img src="../assets/uber_pr.png" alt="" />
        <h1>Uber Magic 2.0</h1>
        <h1>Perfecting the pickup for the Rider app redesign.</h1>
      </div>
      <div class="projects__cards">
        <img src="../assets/book_flights.png" alt="" />
        <h1>Book Flights</h1>
        <h1>Airline ticket booking application.</h1>
      </div>
      <div class="projects__cards">
        <img src="../assets/home_security.png" alt="" />
        <h1>Home Security App</h1>
        <h1>Control smart home features easily.</h1>
      </div>
      <div class="projects__cards">
        <img src="../assets/plant_recog.png" alt="" />
        <h1>Plant Recognition App</h1>
        <h1>Scan and find out what the plant is.</h1>
      </div>
      <div class="projects__cards">
        <img src="../assets/e_art.png" alt="" />
        <h1>Art E-commerce</h1>
        <h1>Sell unique art pieces online.</h1>
      </div>
    </div>
    <div class="right_arr">
      <img src="../assets/right_arr.svg" alt="" />
    </div>
  </div>
  <div v-else class="works">
    <div
      class="cards"
      @click="
        (this.$store.state.active.status = true),
          (this.$store.state.active.year = '2018')
      "
    >
      <img src="../assets/1.png" alt="" />
      <h1>2018</h1>
      <h1>12 projects</h1>
    </div>
    <div
      class="cards"
      @click="
        (this.$store.state.active.status = true),
          (this.$store.state.active.year = '2019')
      "
    >
      <img src="../assets/2.png" alt="" />
      <h1>2019</h1>
      <h1>7 projects</h1>
    </div>
    <div
      class="cards"
      @click="
        (this.$store.state.active.status = true),
          (this.$store.state.active.year = '2020')
      "
    >
      <img src="../assets/3.png" alt="" />
      <h1>2020</h1>
      <h1>13 projects</h1>
    </div>
    <div
      class="cards"
      @click="
        (this.$store.state.active.status = true),
          (this.$store.state.active.year = '2021')
      "
    >
      <img src="../assets/4.png" alt="" />
      <h1>2021</h1>
      <h1>15 projects</h1>
    </div>
    <div
      class="cards"
      @click="
        (this.$store.state.active.status = true),
          (this.$store.state.active.year = '2022')
      "
    >
      <img src="../assets/5.png" alt="" />
      <h1>2022</h1>
      <h1>5 projects</h1>
    </div>
    <div
      class="cards"
      @click="
        (this.$store.state.active.status = true),
          (this.$store.state.active.year = '2023')
      "
    >
      <img src="../assets/6.png" alt="" />
      <h1>2023</h1>
      <h1>2 projects</h1>
    </div>
  </div>
  <div v-if="this.$store.state.active.status" class="more">
    <h1
      @click="
        close(this.$store.state.yearMenu),
          (this.$store.state.active.status = false)
      "
    >
      MORE PROJECTS
    </h1>
  </div>
</template>

<script>
export default {
  methods: {
    close(op) {
      op.status = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.opacity__muted {
  opacity: 0.5;
}
.pr_active__text {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  img {
    margin: 1rem;
  }
  @media only screen and (max-width: 810px) {
    h1 {
      font-size: 70px;
    }
    img {
      margin: 0.3rem 1rem;
      width: 4%;
    }
  }
  @media only screen and (max-width: 500px) {
    h1 {
      font-size: 40px;
    }
  }
}

.text__orange {
  color: #f35330;
  font-size: 112px;
  font-family: "Playfair Display";
}
.year__menu {
  opacity: 1 !important;
  z-index: 1;
  position: absolute;
  .year__menu__close {
    background: #f35330;
    display: flex;
    justify-content: flex-end;

    img {
      margin: 0.2rem;
      height: 3rem;
      cursor: pointer;
    }
  }
  .year__menu__list {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 350px;
    background: #f35330;
    li {
      cursor: pointer;
      border-top: 1px solid #e1e1e1;
      padding: 1.5rem 0.7rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        color: #e1e1e1;
        font-family: "Lato";
        font-weight: 700;
        font-size: 24px;
        letter-spacing: 0.16em;
      }
      h2 {
        letter-spacing: 0.08em;
        color: #e1e1e1;
        font-family: "Lato";

        font-weight: 400;
        font-size: 14px;
      }
    }
  }
}
.year__menu_active {
  background: #424242;
}

.projects {
  display: flex;
  align-items: center;
  justify-content: center;

  .left_arr,
  .right_arr {
    margin: 0 1rem;
  }
}
.projects__cards {
  margin: 1rem;
  img {
    width: 235px;
  }
}
.pr__wrapper {
  display: flex;
  justify-content: center;
  width: 1200px;
  overflow: hidden;
}
.works {
  display: flex;
  @media only screen and (max-width: 1100px) {
    margin: 0 1rem;
  }
  @media only screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: auto auto auto;
    .cards {
      img {
        width: 90%;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    grid-template-columns: auto auto;
  }
}
.cards {
  cursor: pointer;
  margin: 1rem;
  img {
    width: 100%;
  }
  h1 {
    font-weight: 300;
  }
  @media only screen and (max-width: 1500px) {
    margin: 0.2rem;
  }
}
.more {
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-decoration: underline;
  color: #f35330;
  cursor: pointer;
  font-size: 14px;
}
.text {
  display: flex;

  flex-direction: row;

  justify-content: center;
  height: 250px;
  h1 {
    font-family: "Playfair Display";
    color: #f35330;
    font-size: 112px;

    margin-right: 10rem;
    @media only screen and (max-width: 1100px) {
      margin-right: 5rem;
    }
    @media only screen and (max-width: 700px) {
      margin: unset;
    }
    @media only screen and (max-width: 425px) {
      font-size: 90px;
    }
  }
  h3 {
    font-size: 18px;
    width: 587px;
    line-height: 150%;
    text-align: left;
    @media only screen and (max-width: 700px) {
      text-align: unset;
      width: unset;
    }
  }
  @media only screen and (max-width: 1500px) {
    margin: 0 2rem;
    justify-content: center;
  }
  @media only screen and (max-width: 700px) {
    align-items: center;
    flex-direction: column;
  }
  @media only screen and (max-width: 450px) {
    height: unset;
  }
}
</style>
