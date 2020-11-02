<script lang='ts'>
    import { quadOut } from 'svelte/easing'
    import { tweened } from 'svelte/motion'
    export let name: string
    export let level: number
    export let className: string

    let tweenedLevel = tweened(1, {duration: 2000, easing: quadOut})
    $tweenedLevel = level
    $: d = `M 1,0.5 ${([1,2,3,4,5]).slice(0, Math.floor($tweenedLevel)).map(v => 'H ' + v).join(' ')} H ${$tweenedLevel}`
    $: wat = 0
</script>


<div class={`grid grid-cols-2 gap-2 w-full ${className}`}>
    <span class='m-auto text-lg'>{name}</span>
    <!-- <svg class='max-w-sm' viewBox="0 0 6 1" fill="yellow"> -->
    <svg class='max-w-sm' viewBox="0 0 10 10" fill="none">
        <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stop-color="#ff00cc" />
                <stop offset="100%" stop-color="#333399"/>
            </linearGradient>
            <!-- <marker id="mark" markerWidth="2" markerHeight="2" refX="1" refY="1">
                <circle cx="1" cy="1" r="1" stroke="none" fill="#00f"/>
            </marker> -->
        </defs>
        <!-- <path {d} stroke="url(#gradient)" stroke-width="0.1" fill="none" stroke-linecap="round" marker-mid="url(#mark)" /> -->
        <circle cx="50%" cy="50%" stroke="lightgray" stroke-width="0.1"/>
        <circle cx="50%" cy="50%" stroke="red" stroke-linecap="round" stroke-width="0.1"/>
    </svg>
</div>

<style>
    div {
        grid-template-columns: 1fr 2fr;
    }
</style>