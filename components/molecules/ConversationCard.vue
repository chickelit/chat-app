<template>
  <a href="/conversations/1" class="conversation-card">
    <div class="avatar skeleton" />
    <div class="container">
      <div class="username">
        <div class="skeleton skeleton-text"></div>
      </div>
      <div class="latest-message">
        <div class="skeleton skeleton-text"></div>
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.username {
  .skeleton-text {
    width: 100%;
    height: 1rem;
    margin-bottom: 0.25rem;
    border-radius: 0.125rem;
  }
}
.latest-message {
  .skeleton-text {
    width: 100%;
    height: 0.875rem;
    margin-bottom: 0.25rem;
    border-radius: 0.125rem;
  }
}
.conversation-card {
  padding: 0.25rem;
  border-radius: 0.3rem;
  background: color("secondary", "lighter");
  display: grid;
  grid-template-columns: 3rem 1fr;
  grid-template-rows: 3rem;
  gap: 0.5rem;
  align-items: center;
  transition: all 0.15s linear;
  &:hover {
    background: color("secondary", "lightest");
  }
  .avatar {
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
  .container {
    .username {
      width: 55%;
    }
    .latest-message {
      width: 85%;
    }
  }
}
</style>
