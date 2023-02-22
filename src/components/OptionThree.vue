<template>
  <div>
    <div class="text text__orange text_expertise">
      <h1>Honors</h1>
    </div>
    <div class="honors__content">
      <div class="honors__text">
        <h1 class="text_orange">FEATURED</h1>
        <h1>Interview with Techcrunch</h1>
        <img src="../assets/user.png" alt="" />
        <h1>
          My journey of becoming a visual designer and my views on websites as a
          medium of expression
        </h1>
      </div>
      <div class="honors__list">
        <ul>
          <li>
            <h1>FOR DISPLAY <br />2022</h1>
            <h1>Awwwards SOTD</h1>
            <div class="arrow">
              <img src="../assets/Vector.svg" alt="" />
            </div>
          </li>
          <li>
            <h1>Interview <br />2021</h1>
            <h1>wix.com</h1>
            <div class="arrow">
              <img src="../assets/Vector.svg" alt="" />
            </div>
          </li>
          <li>
            <h1>FOR QUAIVE <br />2021</h1>
            <h1>Orpetron SOTD</h1>
            <div class="arrow">
              <img src="../assets/Vector.svg" alt="" />
            </div>
          </li>
          <li>
            <h1>FEATURE <br />2020</h1>
            <h1>CSS Awards</h1>
            <div class="arrow">
              <img src="../assets/Vector.svg" alt="" />
            </div>
          </li>
        </ul>
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
.text__orange {
  color: #f35330;
  font-size: 112px;
  font-family: "Playfair Display";
}
.text_expertise {
  height: 125px !important;
}
.honors__content {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.honors__text {
  h1 {
    text-align: left;
    line-height: 2rem;
  }
  width: 277px;
  img {
    width: 277px;
    margin: 1rem 0;
  }
}
.honors__list {
  width: 70%;

  li {
    height: 110px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #424242;
    align-items: center;
    cursor: pointer;
  }
  li:hover {
    border-bottom: 1px solid #f35330;
  }
  li:hover h1 {
    margin: 0 2rem;
    color: #f35330;
  }
  li:hover img {
    margin-right: 2rem;
  }
}
.text_orange {
  color: #f35330;
}
@media only screen and (max-width: 1200px) {
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
  .honors__content {
    flex-direction: column;
  }
  .honors__text {
    width: unset;
    display: block;
    h1 {
      text-align: center;
    }
  }
  .honors__list {
    width: 90%;
    li:hover {
      // margin: unset;
      // justify-content: space-around;
      h1 {
        margin: 0 1rem;
      }
      img {
        margin: 0 1rem;
      }
    }
  }
}
</style>
