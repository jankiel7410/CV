<script lang='ts'>
    import Header from './Header.svelte'
    export let company: string
    export let timespan: string
    export let role: string
    export let sub: string
</script>

<li role="article">
    <Header>
        <time class='text-gray-600 font-light'>{timespan}</time>
        {company}
    </Header>
    <h4 class='text-xl text-gray-800 font-bold mt-3'>
        {role}
    </h4>
    <p class='mt-1 text-gray-700 italic'>{sub}</p>
    <p>I was involved in the following projects:</p>
    <ul class='ml-4 text-base divide-y divide-solid divide-gray-400'>
        <slot></slot>
    </ul>
</li>