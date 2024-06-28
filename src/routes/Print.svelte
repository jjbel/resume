<script>
    function onClick() {
        console.log('Printing document.');
        window.print();
    }
</script>

<button on:click={onClick}>
    <span id="text"> DOWNLOAD ⬇️ </span>
</button>

<style>
    button {
        font-size: 1em;
        font-family: 'Source Code Pro', monospace;
        background: #004cdb;
        color: white;
        padding: 0.5em;
        border-radius: 0.7em;

        transition-duration: 0.4s;
    }

    button:hover {
        background-color: #003db7;
    }

    button:active {
        background-color: #002370;
    }

    #text {
        padding: 0;
        margin: 0;
    }
</style>
