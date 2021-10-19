<template>
  <aside class="aside">
    <nav class="conversation-navigation">
      <ul>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
        <li class="conversation-card">
          <div class="avatar skeleton"></div>
          <div class="container">
            <div class="username">
              <div class="skeleton skeleton-text"></div>
            </div>
            <div class="latest-message">
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.skeleton {
  opacity: 0.7;
  animation: skeleton-loading 1s linear infinite alternate;
}

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

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

::-webkit-scrollbar {
  width: 0px;
}

.aside {
  position: relative;
  background: color("primary");
  height: calc(100% - 32px);
  margin: 1rem;
  border-radius: 0.5rem;
}
.conversation-navigation {
  width: max-content;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow-y: scroll;
  margin: 0.5rem;
  ul {
    width: max-content;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 0.5rem;
    .conversation-card {
      width: max-content;
      background: color("secondary", "lighter");
      border-radius: 0.3125rem;
      display: grid;
      grid-template-columns: 3.6rem 1fr;
      grid-template-rows: 3.6rem;
      padding: 0.4rem 0.8rem;
      align-items: center;
      gap: 1rem;
      .avatar {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border-radius: 100%;
        object-fit: cover;
      }
      .container {
        width: max-content;
        .username {
          .skeleton-text {
            width: 16rem;
            font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
            color: color("light", "darkest");
            font-size: 1rem;
            font-weight: 600;
          }
        }
        .latest-message {
          .skeleton-text {
            font-family: "Acumin Regular", Arial, Helvetica, sans-serif;
            color: color("light", "darkest");
            font-size: 0.875rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 20rem;
            display: block;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
