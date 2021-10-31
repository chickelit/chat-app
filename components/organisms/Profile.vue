<template>
  <div class="profile">
    <div class="wrapper">
      <input id="avatar-upload" type="file" />
      <label for="avatar-upload" class="avatar skeleton"></label>
      <form>
        <BaseInput value="email@gmail.com" disabled class="disabled-input" />
        <BaseInput value="name" />
        <BaseInput value="username" :max-length="32" />
        <button type="submit">Salvar</button>
      </form>
      <div class="forgot-password">
        <a href="/forgotPassword">Mudar minha senha</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  background: color("primary");
  padding: 2rem;
  border-radius: 0.3125rem;
  display: grid;
  justify-items: center;
  align-items: center;
  .wrapper {
    border-radius: 0.3125rem;
    background: color("secondary");
    padding: 1rem;
    display: grid;
    box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
    grid-auto-rows: max-content;
    justify-items: center;
    align-items: center;
    gap: 4rem;
    form {
      display: grid;
      grid-template-columns: 20rem;
      gap: 0.4375rem;
      button[type="submit"] {
        margin-top: 1rem;
        font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
        color: color("dark", "lightest");
        background: color("success");
        height: 1.5rem;
        width: 6rem;
        justify-self: center;
        font-size: 1.125rem;
        border-radius: 0.3125rem;
        transition: all 0.15s linear;
        &:hover {
          background: color("success", "lighter");
        }
      }
    }
    .avatar {
      cursor: pointer;
      align-self: center;
      box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
      width: 12rem;
      height: 12rem;
      border-radius: 100%;
    }
  }
}
.disabled-input {
  background: color("primary");
}
.forgot-password {
  a {
    font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
    color: color("dark", "lightest");
    text-decoration: underline;
    transition: all 0.15s linear;
    &:hover {
      color: color("light");
    }
  }
}
input[type="file"] {
  display: none;
}
</style>
