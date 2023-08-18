<script>
    // Icon
    export let src
    export let alt
    
    //content
    export let title
    export let content
    export let retirectButton
    import chevron from "C:/Users/Reymar/Downloads/my-svelte-training/src/lib/image/chevron-right.svg"
</script>

<div class="flex flex-col justify-center text-center items-center gap-2 group max-w-sm ">
    <img class="w-8 group-hover:w-16 transition-all" {src} {alt}/>
    <p class="title">{title}</p>
    <p class="content">{content}</p>

    <button on:click={retirectButton} class="inline-flex items-center gap-2 group-hover:gap-4 transition-all group-hover:text-red-700 ">
        <span class="red uppercase ">Read more</span>
        <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Heroicons">
            <path class="group-hover:stroke-red-700" id="Vector 335" d="M6.875 3.75L13.125 10L6.875 16.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </svg>
            </span>
    </button>

</div>

