<script lang='ts'>
    export let timespan: string
</script>

<h3 class='text-xl text-gray-800'>
    <time class="text-gray-600 font-light">{timespan}</time> <span class="uppercase spacing-2 tracking-wide"><slot /></span>
</h3>