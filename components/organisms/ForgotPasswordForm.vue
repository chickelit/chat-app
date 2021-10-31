<template>
  <div class="forgot-password-form">
    <h1 class="title">Esqueceu a senha</h1>
    <form>
      <BaseInput placeholder="E-mail" type="email" />
      <div class="wrapper">
        <NuxtLink class="form-link" to="/login">Fazer login</NuxtLink>
        <NuxtLink class="form-link" to="/register">Não tem uma conta?</NuxtLink>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
  color: color("dark", "lightest");
  justify-self: center;
}
.forgot-password-form {
  width: 22.5rem;
  background: color("primary");
  padding: 2rem 4rem;
  border-radius: 0.3125rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 2rem;
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 0.5rem;
    align-items: center;
    justify-items: center;
    .wrapper {
      width: 96.5%;
      display: grid;
      grid-auto-columns: auto;
      grid-auto-flow: column;
      justify-content: space-between;
    }
    .form-link {
      color: color("light", "darkest");
      transition: all 0.15s linear;
      font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
      text-decoration: underline;
      justify-self: start;
      &:hover {
        color: color("light");
      }
    }
    input {
      width: 90%;
    }
    button[type="submit"] {
      margin-top: 1rem;
      background: color("success");
      width: 6rem;
      height: 1.5rem;
      border-radius: 0.3125rem;
      color: color("dark", "lightest");
      font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
      transition: all 0.15s linear;
      &:hover {
        background: color("success", "lighter");
      }
    }
  }
}
</style>
