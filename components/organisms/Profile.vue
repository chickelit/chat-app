<template>
  <div class="profile">
    <h1 class="title">Meu perfil</h1>
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
</template>

<style lang="scss" scoped>
.title {
  font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
  color: color("dark", "lightest");
  justify-self: center;
  position: absolute;
  top: -1.5rem;
  background: color("secondary", "darker");
  padding: 0.25rem 1rem;
  border-radius: 0.3125rem;
  box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
}
.profile {
  position: relative;
  margin-top: 1.5rem;
  border-radius: 0.3125rem;
  background: color("primary");
  padding: 4rem 4rem 2rem 4rem;
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
.disabled-input {
  opacity: 0.7;
}
.forgot-password {
  display: grid;
  justify-items: center;
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
