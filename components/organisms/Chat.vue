<template>
  <main class="chat">
    <header class="header">
      <div class="cover skeleton"></div>
      <div class="title">
        <div class="skeleton skeleton-text"></div>
      </div>
    </header>
    <div class="message-list"></div>
    <div class="message-engine">
      <form>
        <input
          class="message-engine-input"
          type="text"
          placeholder="Mensagem"
        />
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.chat {
  width: 100%;
  height: 100%;
  background: color("primary", "lighter");
  border-radius: 0.3125rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
}
.header {
  background: color("primary");
  padding: 0.75rem;
  border-radius: 0.3125rem 0.3125rem 0 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 3.4rem 1fr;
  grid-template-rows: 3.4rem;
  align-items: center;
  gap: 1rem;
}
.cover {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.title {
  width: 100%;
  font-size: 1.25rem;
  font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: color("dark", "lightest");
  .skeleton-text {
    height: 1.25rem;
    width: 20rem;
    border-radius: 0.125rem;
  }
}
.message-engine {
  background: color("primary");
  padding: 0.75rem;
  box-shadow: 0 -2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0 0 0.3125rem 0.3125rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  .message-engine-input {
    background: color("primary", "lighter");
    font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
    color: color("dark", "lightest");
    padding: 0.25rem;
    border-radius: 0.3rem;
    font-size: 1.0625rem;
  }
}
</style>
