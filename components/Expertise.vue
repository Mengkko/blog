<template>
  <div class="mt-8">
    <div class="mt-2">
      <h2
        class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize"
      >
        Frontend
      </h2>

      <ul class="flex flex-wrap gap-4 items-center">
        <li class="flex items-center">
          <Javascript class="h-10 w-10"></Javascript>
        </li>
        <li class="flex items-center">
          <Vuejs class="h-10 w-10"></Vuejs>
        </li>
        <li class="flex items-center">
          <Nuxt class="h-10 w-10"></Nuxt>
        </li>
        <li class="flex items-center">
          <Html class="h-10 w-10 rounded-sm drop-shadow-sm"></Html>
        </li>
        <li class="flex items-center">
          <TailwindCss class="h-10 w-10"></TailwindCss>
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h2
        class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize"
      >
        Backend
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex items-center">
          <Node class="h-10 w-10"></Node>
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <h2
        class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize"
      >
        DevOps
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex items-center">
          <GithubAction class="h-10 w-10"></GithubAction>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Javascript from '../assets/devicon/javascript.svg?inline'
import Html from '../assets/devicon/html.svg?inline'
import Vuejs from '../assets/devicon/vuejs.svg?inline'
import TailwindCss from '../assets/devicon/tailwindcss.svg?inline'
import Nuxt from '../assets/devicon/nuxt.svg?inline'
import Node from '../assets/devicon/node.svg?inline'
import GithubAction from '../assets/devicon/githubactions.svg?inline'

export default {
  components: {
    Javascript,
    Html,
    Vuejs,
    TailwindCss,
    Nuxt,
    Node,
    GithubAction,
  },
}
</script>
