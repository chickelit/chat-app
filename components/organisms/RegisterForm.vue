<template>
  <div class="register-form">
    <form>
      <h1 class="title">Cadastro</h1>
      <BaseInput
        type="email"
        placeholder="E-mail"
        aria-placeholder="Digite seu email"
      />
      <div class="links">
        <NuxtLink class="link" to="/login"
          >Fazer login</NuxtLink
        >
        <NuxtLink class="link" to="/forgotPassword">Esqueci minha senha</NuxtLink>
      </div>
      <BaseButton type="submit" text="Enviar email" aria-label="Enviar email" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.links {
  margin-top: 0.5rem;
  width: 100%;
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  .link {
    color: color("light", "darkest");
    transition: all 0.15s linear;
    &:hover {
      text-decoration: underline;
      color: color("light", "darker");
    }
  }
}
.register-form {
  min-width: 24rem;
  width: 100%;
  background: color("dark", "darker");
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  .title {
    color: color("light");
    justify-self: center;
    margin-bottom: 2rem;
  }
  form {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    gap: 0.5rem;
    button[type="submit"] {
      margin-top: 1.25rem;
    }
  }
}
</style>
