<script setup>
import { RouterLink, RouterView } from "vue-router";
import titulo from "./components/Titulo.vue";
</script>

<template>
  <header>
    <div
      class="fixed top-0 left-0 z-50 w-full h-16 border-t bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 border-gray-200 dark:border-gray-600"
    >
      <div class="absolute flex justify-center items-center p-5 left-0 h-full">
        <img
          alt="logo"
          class="logo"
          src="@/assets/logo.svg"
          width="125"
          height="125"
        />
        <titulo msg="Personas UXD" />
      </div>
      <div
        class="flex justify-center items-center h-full max-w-lg mx-auto font-medium"
      >
        <RouterLink
          to="/"
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 h-full hover:bg-emerald-800 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mb-1 text-white group-hover:text-cyan-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <span class="text-sm text-white group-hover:text-cyan-400"
            >Inicio</span
          >
        </RouterLink>
        <RouterLink
          to="/crear"
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 h-full hover:bg-emerald-800 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mb-1 text-white group-hover:text-cyan-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <span class="text-sm text-white group-hover:text-cyan-400"
            >Crear</span
          >
        </RouterLink>
        <RouterLink
          to="/personas"
          type="button"
          class="inline-flex flex-col items-center justify-center px-5 h-full hover:bg-emerald-800 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mb-1 text-white group-hover:text-cyan-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <span class="text-sm text-white group-hover:text-cyan-400"
            >Personas</span
          >
        </RouterLink>
      </div>
    </div>
  </header>
  <RouterView class="mt-20" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
