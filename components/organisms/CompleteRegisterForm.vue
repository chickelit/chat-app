<template>
  <div class="complete-register-form">
    <form>
      <h1 class="title">Completar cadastro</h1>
      <BaseInput type="email" placeholder="E-mail" disabled />
      <BaseInput placeholder="Nome" aria-placeholder="Digite seu nome" />
      <BaseInput
        placeholder="Nome de usuário"
        aria-placeholder="Digite um nome de usuário"
      />
      <BaseInput
        type="password"
        placeholder="Senha"
        aria-placeholder="Digite uma senha"
      />
      <BaseInput
        type="password"
        placeholder="Confirmação de senha"
        aria-placeholder="Confirme sua senha"
      />
      <BaseButton
        type="submit"
        text="Concluir"
        aria-label="Concluir cadastro"
      />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.complete-register-form {
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
