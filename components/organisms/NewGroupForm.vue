<template>
  <div class="register-form">
    <h1 class="title">Criar grupo</h1>
    <form>
      <BaseInput placeholder="Nome do grupo" type="text" :max-length="30" />
      <button type="submit">Criar</button>
    </form>
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
.register-form {
  margin-top: 1.5rem;
  position: relative;
  width: 22.5rem;
  background: color("primary");
  padding: 4rem 4rem 2rem 4rem;
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
