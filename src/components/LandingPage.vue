<template>
  <div class="opening__wrapper">
    <div class="text">
      <h1>
        <strong class="richard">RICHARD</strong>
        OLAF
      </h1>
      <h2>UI/UX Designer</h2>
    </div>
    <div class="menu">
      <div class="menu__option">
        <h1>01</h1>
        <h2>Works</h2>
      </div>
      <div class="menu__option">
        <h1>02</h1>
        <h2>Expertise</h2>
      </div>
      <div class="menu__option">
        <h1>03</h1>
        <h2>Honors</h2>
      </div>
      <div class="menu__option">
        <h1>04</h1>
        <h2>Contact</h2>
      </div>
    </div>
    <div class="about">
      <div>
        <h1>
          Richard Olaf is an independent UI/UX Designer from Kathmandu, Nepal
        </h1>
      </div>
      <div><img src="../assets/user.png" alt="" /></div>
      <div>
        <h1>
          Passionate about creating unforgettable and beautiful digital
          experiences.
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTriger() {
      const main = document.querySelector(".opening__wrapper");

      const observer = new IntersectionObserver((e) => {
        e.forEach((en) => {
          if (en.isIntersecting === true) {
            this.$store.state.scrollBarActive = false;
          }
        });
      });

      observer.observe(main);
    },
  },
  mounted() {
    setTimeout(() => {
      this.scrollTriger();
    }, 100);
  },
};
</script>

<style lang="scss" scoped>
.text {
  margin-top: 4rem;
  h1 {
    font-weight: 400;
    font-size: 70px;
    margin-right: 15rem;
    strong {
      font-weight: 400;
      font-size: 120px;
      font-family: "Playfair Display";
    }
  }
  h2 {
    font-family: "Playfair Display";
    font-weight: 400;
    font-size: 70px;
    margin-left: 35rem;
    color: #f35330;
  }
}
.menu {
  display: flex;
  justify-content: space-between;
  margin: 3rem 2rem;
  .menu__option {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1 {
      font-weight: 300;
    }
    h2 {
      font-weight: 600;
      line-height: 22px;
    }
  }
}
.about {
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    width: 250px;
    font-weight: 400;
    font-size: 18px;
    opacity: 0.9;
  }
}
@media only screen and (max-width: 1150px) {
  .text {
    h1 {
      margin-right: 5rem;
    }
    h2 {
      margin-left: 25rem;
    }
  }
  .about {
    img {
      width: 100%;
    }
  }
}
@media only screen and (max-width: 900px) {
  .about {
    h1 {
      width: unset;
    }
    flex-direction: column;
    img {
      width: 70%;
    }
  }
  .text {
    h1 {
      margin: unset;
      font-size: 45px;
      .richard {
        margin: unset;
        font-size: 80px;
      }
    }
    h2 {
      margin: unset;
      font-size: 40px;
    }
  }
}
@media only screen and (max-width: 550px) {
  .menu {
    margin: 3rem 1rem;
  }
  .about {
    h1 {
      width: unset;
      line-height: 25px;
      font-size: 14px;
      margin: 0 2rem;
    }
    flex-direction: column;
    img {
      width: 70%;
    }
  }
  .text {
    h1 {
      margin: unset;
      font-size: 37px;
      .richard {
        font-size: 68px;
      }
    }
    h2 {
      margin: unset;
      font-size: 36px;
    }
  }
}
</style>
