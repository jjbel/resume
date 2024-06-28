<script>
    function onClick() {
        console.log('Printing document.');
        window.print();
    }
</script>

<button on:click={onClick}>
    <span id="text"> DOWNLOAD </span>
    <span class="material-symbols-outlined"> download </span>
</button>

<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
/>

<style>
    button {
        font-size: 1.4em;
        font-family: 'Source Code Pro', monospace;
        background: #f84100;
        color: white;
        padding: 0.2em;
        border-radius: 0.3em;

        transition-duration: 0.4s;
    }

    button:hover {
        background-color: #b73100;
    }

    button:active {
        background-color: #701e00;
    }

    #text {
        padding: 0;
        margin: 0;
    }
</style>
