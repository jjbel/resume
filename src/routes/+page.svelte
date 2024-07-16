<script>
    import Projects from './Projects.svelte';
    import Print from './Print.svelte';
    import Sidebar from './Sidebar.svelte';
</script>

<Sidebar />

<div class="content">
    <h1 id="home">Jai Bellare - Résumé</h1>

    <Print />

    <p>🎓 Excited to join BTech in Electrical Engineering at IIT-Bombay in July 2024 !</p>

    <h2 id="projects">Projects</h2>

    <Projects />

    <h2 id="skills">Skills</h2>
    <p>Click on each link to show I project I did.</p>

    <h3>Engineering Software</h3>
    <p>
        ANSYS
        <br />
        MATLAB/Scilab
        <br />
        LTSPICE
        <br />
        SOLIDWORKS
    </p>

    <h2 id="edu">Education</h2>
    <h3>IIT Bombay</h3>
    <h3>IITian's PACE</h3>
    <h3>Bombay Scottish School, Mahim</h3>

    <h2 id="about">About this webpage</h2>
    <p>
        This site is made using <a href="https://svelte.dev/">Svelte</a>, a javascript framework
        which prerenders pages for fast viewing, plus HTML and CSS of course.
        <br />
        The page is hosted on <a href="https://pages.github.com/">Github Pages</a>.
        <br />
        You can find the source code at
        <a href="https://github.com/jjbel/resume/">my Github</a>.
    </p>
</div>

<style>
    .content {
        margin-left: 14vw;
        padding: 1px 16px;
        height: 1000px;
    }

    * {
        color: rgb(60, 60, 67);
        /* controversial */
    }

    h2 {
        text-decoration: underline;
    }

    p {
        margin: 1em 1em;
        /* gives a nice indent */
    }
</style>
