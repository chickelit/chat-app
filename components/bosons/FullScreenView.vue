<template>
  <div class="full-screen-view">
    <header class="header">
      <Wrapper class="header-wrapper">
        <slot name="header-slot" />
      </Wrapper>
    </header>
    <Wrapper class="main-wrapper">
      <slot name="main-slot" />
      <clientOnly>
        <notifications
          :max="1"
          group="global"
          classes="custom-notification"
          position="bottom right"
          style="bottom: 0.5rem; right: 0.5rem"
        />
      </clientOnly>
    </Wrapper>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.full-screen-view {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 5000;
  background: color("dark");
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4.5rem 1fr auto;
}
.header {
  height: 100%;
  padding: 0 1rem;
  background: color("dark", "darkest");
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  align-content: center;
  .header-wrapper {
    justify-self: center;
  }
  .title {
    font-size: 1.5rem;
    width: max-content;
    font-family: "Tahoma";
    color: color("light", "darkest");
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s linear;
  }
}
</style>
