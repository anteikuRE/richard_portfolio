<template>
  <nav>
    <div class="portfolio">
      <img src="../assets/logo.svg" alt="" />
      <h3>Portfolio</h3>
    </div>
    <h1>RICHARD</h1>
    <h3 class="end">Open for any collaborations and offers</h3>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  margin: 1rem 28px;
  align-items: center;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 10px;
  width: 97%;
  top: 0;
  h1 {
    font-weight: 400;
    font-size: 30px;
    font-family: "Playfair Display", serif;
  }
  h3 {
    font-weight: 400;
    font-size: 16px;
  }
  .end {
    width: 192px;
    text-align: end;
  }
  .portfolio {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 0.6rem;
    }
  }
}

@media only screen and (max-width: 1150px) {
  nav {
    width: unset;
  }
}
@media only screen and (max-width: 500px) {
  nav {
    margin: 1rem 8px;
    .end {
      width: 88px;
    }
    h3 {
      font-size: 12px;
    }
    h1 {
      font-size: 24px;
      margin: 0 1rem;
    }
  }
}
</style>
