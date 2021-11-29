<template>
  <div class="change-password-form">
    <form>
      <h1 class="title">Esqueceu a senha</h1>
      <BaseInput type="email" placeholder="E-mail" disabled />
      <BaseInput type="password" placeholder="Senha" aria-placeholder="Escolha uma nova senha" />
      <BaseInput type="password" placeholder="Confirmação sua senha" aria-placeholder="Confirme sua nova senha" />
      <BaseButton type="submit" text="Concluir" aria-label="Concluir" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.change-password-form {
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
