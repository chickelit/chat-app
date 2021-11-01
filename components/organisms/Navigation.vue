<template>
  <div class="navigation">
    <Container class="container">
      <a href="/" class="title">ChatApp</a>
      <button class="hamburger-button" @click="$emit('toggleHamburgerMenu')">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
    </Container>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  position: relative;
  width: 100%;
  background: color("primary");
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 1rem 0;
  .container {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    align-items: center;
    .title {
      cursor: pointer;
      font-family: Tahoma, Arial, Helvetica, sans-serif;
      font-size: 2rem;
      font-weight: 500;
      justify-self: start;
      color: color("light", "darkest");
      &:hover {
        color: color("light");
      }
    }
    nav {
      display: grid;
      align-items: center;
      justify-self: end;
      @include screen("small") {
        display: none;
      }
      ul {
        margin: 0;
        display: grid;
        grid-auto-columns: max-content;
        grid-template-rows: max-content;
        grid-auto-flow: column;
        gap: 3rem;
        align-items: center;
        .nuxt-link-active {
          position: relative;
        }
        .nuxt-link-active:after {
          content: "";
          top: 2.4rem;
          left: 0;
          border-radius: 0.5rem;
          width: 100%;
          height: 0.5rem;
          background: color("dark", "lightest");
          position: absolute;
        }
        .nav-item {
          .avatar {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 100%;
          }
          .nav-link {
            font-size: 1rem;
            font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
            color: color("light", "darkest");
            cursor: pointer;
            &:hover {
              color: color("light");
            }
          }
        }
      }
    }
    .hamburger-button {
      justify-self: end;
      cursor: pointer;
      width: 2rem;
      height: auto;
      display: grid;
      grid-auto-rows: 0.3125rem;
      grid-auto-flow: row;
      gap: 0.3125rem;
      .bar {
        width: 100%;
        height: 100%;
        background: color("light", "darkest");
        border-radius: 1rem;
      }
      &:hover {
        .bar {
          background: color("light");
        }
      }
    }
  }
}
</style>
