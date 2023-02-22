<template>
  <div class="back">
    <div class="contact__form" v-if="this.$store.state.contactMenu.status">
      <div class="contact__form__wrapper">
        <div class="contact__form__close">
          <h1>Let’s collaborate</h1>
          <img
            @click="close(this.$store.state.contactMenu)"
            src="../assets/close__contact.svg"
            alt=""
          />
        </div>
        <form action="">
          <ul>
            <li>
              <label for="">May I please have your name?</label>
              <input type="text" name="" placeholder="Type your name" />
            </li>
            <li>
              <label for=""
                >What kind of project would you like me to craft for you?</label
              >
              <input
                type="text"
                name=""
                placeholder="Say something about your project"
              />
            </li>
            <li>
              <label for="">How should I get in touch with you?</label>
              <input type="text" name="" placeholder="Type your email" />
            </li>
            <li>
              <label for="">Anything else you would like to mention? </label>
              <input
                type="text"
                name=""
                placeholder="More details about your project"
              />
            </li>
          </ul>
        </form>
        <button>Write a message</button>
      </div>
    </div>
    <div class="content__wrapper">
      <div
        class="content__text"
        :class="{ opacity__muted: this.$store.state.contactMenu.status }"
      >
        <button @click="this.$store.state.contactMenu.status = true">
          Click
        </button>
        <h1 style="color: #f35330">
          Let's Talk About The Next
          <h1 class="white_text">Big Thing</h1>
        </h1>
      </div>
      <div
        class="op4_buttons"
        :class="{ opacity__muted: this.$store.state.contactMenu.status }"
      >
        <button @click="this.$store.state.contactMenu.status = true">
          Write a message
        </button>
        <button @click="this.$store.state.contactMenu.status = true">
          Discuss a project
        </button>
      </div>
      <div
        class="footer"
        :class="{ opacity__muted: this.$store.state.contactMenu.status }"
      >
        <ul>
          <li>
            <div>
              <h1>Facebook</h1>
              <h3>richardolaf</h3>
            </div>
            <img src="../assets/faceb.svg" alt="" />
          </li>
          <li>
            <div>
              <h1>Twitter</h1>
              <h3>richardolaf</h3>
            </div>
            <img src="../assets/twitter.svg" alt="" />
          </li>
          <li>
            <div>
              <h1>Instagram</h1>
              <h3>richardolaf</h3>
            </div>
            <img src="../assets/insta.svg" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <div
      class="back__circle"
      :class="{ opacity__muted: this.$store.state.contactMenu.status }"
    ></div>
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

<style scoped lang="scss">
* {
  transition: all 0.5s;
}
.opacity__muted {
  opacity: 0.5;
}
.contact__form {
  height: 88%;
  z-index: 2;
  background-color: #fff;
  position: absolute;
  .contact__form__wrapper {
    height: 100%;
    padding: 0 4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    button {
      padding: 20px 0px;
      border: none;
      color: #fff;
      background: #f35330;
      border-radius: 80px;
      width: 300px;
      cursor: pointer;
    }
  }
  .contact__form__close {
    img {
      width: 60px;
      height: 60px;
      cursor: pointer;
    }
    h1 {
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      color: #f35330;
    }
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  form {
    height: 60%;
    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      text-align: left;

      justify-content: space-around;
      li {
        display: flex;
        width: 100%;
        flex-direction: column;
        label {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          color: #424242;
          align-self: flex-start;
        }
        input::placeholder {
          font-family: "Lato";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #b8b8b8;
        }
        input {
          border: none;
          border-bottom: 1px solid #b8b8b8;
          margin: 1rem 0rem;
          padding-left: 10px;
          padding-bottom: 10px;
        }
        input:focus {
          outline: none;
        }
      }
    }
  }
}
.back {
  margin-top: 6rem;
  background-color: black;
  height: 700px;
  width: 110%;
  overflow: hidden;

  .back__circle {
    width: 800px;
    background: linear-gradient(
      180deg,
      #595959 0%,
      rgba(16, 15, 15, 0.489583) 29.17%,
      rgba(16, 15, 15, 0) 100%
    );

    height: 800px;
    border-radius: 100%;
    top: -41%;
    left: 23%;
    position: relative;
    @media only screen and (max-width: 1500px) {
      display: none;
    }
  }
}
.content__wrapper {
  margin-top: 2rem;
  button {
    cursor: pointer;
  }
  .op4_buttons {
    z-index: 1;
    button {
      margin: 0 1rem;
      width: 350px;
      padding: 30px;
      border-radius: 80px;
    }
    :nth-child(2) {
      background: none;
      color: #fff;
      border: 1px solid #e1e1e1;
    }
  }
  .content__text {
    font-weight: 400;
    font-size: 58px;
    font-family: "Playfair Display";
    display: flex;
    align-items: flex-end;
    justify-content: center;
    // margin: 0 5rem;
    margin-right: 5rem;
    .white_text {
      font-style: italic;
      color: #e1e1e1;
    }
    button {
      width: 70px;
      height: 70px;
      border-radius: 100%;
      margin-right: 5rem;
      background: linear-gradient(
        0deg,
        #595959 0%,
        rgba(0, 0, 0, 1) 35%,
        rgba(0, 0, 0, 1) 65%,
        #595959 100%
      );
      font-family: "Lato";
      font-weight: 300;
      color: #fff;
    }
  }
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  .footer {
    display: flex;
    justify-content: center;
    z-index: 1;

    ul {
      display: flex;
      justify-content: center;
      li:hover {
        background: #f35330;
        border-top: 1px solid #f35330;
        padding: 1rem;
        border-radius: 8px;
      }
      li {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 250px;
        margin: 0 1rem;
        border-top: 1px solid #e1e1e1;
        padding: 1rem 0;
        text-align: left;
        color: #e3e3e3;

        h1 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 2px;
        }
        h3 {
          opacity: 0.8;
          font-size: 15px;
        }
      }
    }
  }
}
@media only screen and (max-width: 860px) {
  .content__wrapper {
    .content__text {
      flex-direction: column-reverse;
    }
    .footer {
      ul {
        flex-direction: column;
        li {
          margin: 1rem;
        }
      }
    }
  }
}
@media only screen and (max-width: 800px) {
  .back {
    height: unset;

    .content__wrapper {
      margin-top: 5rem;
      .content__text {
        flex-direction: column-reverse;
        margin: 5rem;
      }
      .footer {
        ul {
          flex-direction: column;
          align-items: center;
          li {
            margin: 1rem;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 1500px) {
  .back {
    width: 100%;
  }
}
@media only screen and (max-width: 650px) {
  .content__wrapper {
    .content__text {
      margin: 5rem 0;
    }
  }
}
@media only screen and (max-width: 700px) {
  .back {
    .content__wrapper {
      margin-top: unset;
      .content__text {
        button {
          display: none;
        }
      }
    }
  }
}
@media only screen and (max-width: 764px) {
  .content__wrapper {
    .op4_buttons {
      button {
        margin: 1rem;
        width: 230px;
      }
    }
  }
}
@media only screen and (max-width: 500px) {
  .contact__form {
    height: unset;
    form {
      ul {
        li {
          margin-top: 1rem;
          // input {
          //   margin-top: 1rem;
          //   margin-bottom: 0;
          // }
          label {
            font-size: 17px;
          }
        }
      }
    }
    .contact__form__close {
      h1 {
        text-align: left;
        font-size: 40px;
      }
    }
    .contact__form__close {
      img {
        width: 45px;
        height: 45px;
      }
    }
    .contact__form__wrapper {
      padding: 1rem;
    }
  }
}
</style>
