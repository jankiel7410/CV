<script lang="ts">
  import { fly } from 'svelte/transition'
  import { cubicIn } from 'svelte/easing'

  const tech = [
    { name: 'Python', className: 'python' },
    { name: 'ReactJS', className: 'react' },
    { name: 'PostgreSQL', className: 'psql' },
    { name: 'Amazon Web Services', className: 'aws' },
    { name: 'TypeScript', className: 'ts' },
  ]
  const duration = 400
  const transitions = tech.map((tech, i) => ({
    tech,
    flyIn: { duration, y: -20, opacity: 0, easing: cubicIn },
    flyOut: { duration, y: 20, opacity: 0, easing: cubicIn },
  }))
  let currSlide = 0
  setInterval(() => {
    currSlide = (currSlide + 1) % tech.length
  }, duration * 3)
</script>

<main class="container mx-auto">
  <section class="m-10 w-full">
    <h1 class="font-light text-6xl text-center text-orange-600">Hello! 👋</h1>
    <article class="font-medium text-center text-xl text-gray-600 mt-12">
      My name is Michal Cymbalista.
      <br />
      I'm a Full Stack Software Engineer using
      <div class="relative h-12 my-2 top-0 mx-auto w-auto">
        {#each transitions as { tech, flyIn, flyOut }, index (index)}
          {#if index === currSlide}
            <div
              in:fly={flyIn}
              out:fly={flyOut}
              class="absolute rounded-xl text-4xl mx-auto px-4"
              style="left: 50%; transform: translate(-50%)">
              <h2 class={tech.className}>{tech.name}</h2>
            </div>
          {/if}
        {/each}
      </div>
      to make amazing products.
    </article>
  </section>
</main>

<style>
  .python {
    background: linear-gradient(-193deg, #f9c566 0%, #f9c566 50%, #5395ca 50%, #5395ca);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position-y: 6px;
  }
  .react {
    background-color: rgb(97, 218, 251);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .psql {
    background-color: rgb(49, 97, 146);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .aws {
    background-color: rgb(240, 148, 26);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .ts {
    background-color: rgb(47, 116, 192);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
