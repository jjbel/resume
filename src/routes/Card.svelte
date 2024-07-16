<script>
    export let src;

    let radius = '1em';
</script>

<div class="outer" style="--radius: {radius}">
    <img {src} alt="alt" style="--radius: {radius}" />

    <div class="inner">
        <h3>
            <slot name="title">Title Slot</slot>
        </h3>
        <p>
            <slot name="info">More Info</slot>
        </p>
    </div>
    <!-- TODO link -->
</div>

<style>
    .outer {
        background-color: rgb(25, 25, 25);
        border-radius: var(--radius);
        margin: 0.4em;
        padding: 0em;
        width: 15em;
        color: #d6d6d6;
    }

    .inner {
        padding: .7em;
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
</style>
