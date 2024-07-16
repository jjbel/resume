<script>
    export let src;
    export let link;

    let radius = '1em';
</script>

<!-- <div class="outer" style="--radius: {radius}; cursor: pointer;" on:click={onClick}> -->
<div class="outer" style="--radius: {radius}">
    <a href="/{link}">
        <img {src} alt="alt" style="--radius: {radius}" />

        <div class="inner">
            <h3>
                <slot name="title">Title Slot</slot>
            </h3>
            <p>
                <slot name="info">More Info</slot>
            </p>
        </div>
    </a>
</div>

<style>
    .outer {
        background-color: rgb(25, 25, 25);
        border-radius: var(--radius);
        margin: 0.4em;
        padding: 0em;
        width: 15em;
        color: #d6d6d6;

        transition-property: transform;
        transition-duration: 0.2s;
    }

    .outer:hover {
        transform: scale(1.03);
    }

    .inner {
        padding: 0.7em;
    }

    img {
        width: 15em;
        border-radius: var(--radius) var(--radius) 0em 0em;
    }

    h3 {
        padding: 0em;
        margin: 0em;
    }

    p {
        padding: 0em;
        margin: 0em;
    }

    a {
        color: inherit; /* blue colors for links too */
        text-decoration: inherit; /* no underline */
    }
</style>
