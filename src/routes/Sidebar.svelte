<script>
    import photo from '$lib/assets/jai_photo.jpg';
</script>

<div class="sidebar">
    <img src={photo} alt="Jai" style="width:9vw;height:9vw;" />

    <nav>
        <a class="active" href="#home">Home</a>
        <br />
        <a href="#news">News</a>
        <br />
        <a href="#contact">Contact</a>
        <br />
        <a href="#about">About</a>
    </nav>
</div>

<style>
    .sidebar {
        margin: 0;
        padding: 0;
        width: 14vw;
        height: 100vh;
        background-color: #0f0f18;
        position: fixed;
        overflow: auto;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 0.41em;
        /* prevent padding from changing width */
        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box; /* Firefox, other Gecko */
        box-sizing: border-box; /* Opera/IE 8+ */
    }

    a {
        color: white;
    }
</style>
