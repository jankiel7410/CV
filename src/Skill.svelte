<script lang='ts'>
    import { quadOut } from 'svelte/easing'
    import { tweened } from 'svelte/motion'
    export let name: string
    export let level: number
    export let label: string = null
    let tweenedLevel = tweened(0, {duration: 2000, easing: quadOut})
    $tweenedLevel = level

    $: circumference = 2 * 5 * Math.PI

</script>


<div class='text-gray-900'>
    <div class='relative'>
        <svg viewBox="0 0 12 12" preserveAspectRatio="xMidYMid meet">
            <circle cx="50%" cy="50%" r="5" fill="none" stroke="lightgray" stroke-width="0.2"
                stroke-dasharray={circumference}
                stroke-dashoffset={`${circumference * 1/3}`}/>
            <circle cx="50%" cy="50%" r="5" fill="none"
                stroke="#327af9"
                stroke-linecap="round"
                stroke-dasharray={circumference}
                stroke-dashoffset={`${circumference - ($tweenedLevel / 5 * circumference * 2/3)}`}
                stroke-width="1"/>
        </svg>    
        <span class="absolute top-1/2 left-1/2 text-xl font-slim">{label ?? $tweenedLevel.toFixed(1)}</span>
    </div>
    <div class='text-lg text-center transform -translate-y-4'>{name}</div>
</div>

<style>
    span.absolute {
        transform: translate(-50%, -50%);
    }
    svg {
        transform: rotate(-210deg);
        max-width: 5em;
        margin: auto;
    }
    circle {
        background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-size: auto;
    }
</style>