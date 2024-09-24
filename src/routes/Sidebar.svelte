<script>
    import photo from '$lib/assets/jai_photo.jpg';
    import None from './None.svelte';
</script>

<div class="sidebar">
    <img src={photo} alt="Jai" style="width:9vw;" />

    <div id="info">
        📍 Mumbai, Maharashtra, India
        <br />
        ✉️ jai<None />bellare<None />[at]<None />gmail<None />[dot]<None />com
    </div>

    <nav>
        <a class="active" href="#home">Home</a>
        <br />
        <a href="#projects">Projects</a>
        <br />
        <a href="#skills">Skills</a>
        <br />
        <a href="#edu">Education</a>
        <br />
        <a href="#about">About</a>
    </nav>
</div>

<style>
    .sidebar {
        margin: 0;
        padding: 0;
        width: 18vw;
        height: 100vh;
        position: fixed;
        overflow: scroll;

        background-color: #0f0f18;
        color: white;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 0.41em;
        /* prevent padding from changing width */
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box; /* Firefox, other Gecko */
        box-sizing: border-box; /* Opera/IE 8+ */
    }
</style>
