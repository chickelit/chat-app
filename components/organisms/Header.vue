<template>
  <header class="header">
    <h1 class="title">
      <a href="/">ChatApp</a>
    </h1>
    <a href="/profile">
      <div class="avatar skeleton"></div>
    </a>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: color("primary");
  height: 3.6rem;
  padding: 0 1rem;
  box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  .title {
    a {
      font-family: "Tahoma";
      color: color("light", "darkest");
      font-weight: 500;
      cursor: pointer;
      transition: all 0.15s linear;
      &:hover {
        color: color("light");
      }
    }
  }
  a {
    height: 75%;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    .avatar {
      height: 100%;
      width: 100%;
      border-radius: 100%;
    }
  }
}
</style>
