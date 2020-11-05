<script lang="ts">
  import OrgHeader from './OrgHeader.svelte'
  export let company: string
  export let timespan: string
  export let role: string = null
  export let sub: string
</script>

<li role="article" class='space-y-2'>
  <OrgHeader {timespan}>
    {company}
  </OrgHeader>
  {#if role}
    <h4 class="text-xl text-gray-800 font-bold mt-3">{role}</h4>
  {/if}
  <p class="mt-1 text-gray-700 italic">{sub}</p>
  <slot />
</li>
