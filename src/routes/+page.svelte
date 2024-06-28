<script>
    // import Card from './Card.svelte';
    import Print from './Print.svelte';
    import Sidebar from './Sidebar.svelte';
</script>

<Sidebar />

<div class="content">
    <h1>Jai Bellare - Résumé</h1>

    <Print />

    <p>
        🎓 Will join BTech in Electrical Engineering at IIT-Bombay in July 2024
        !
    </p>

    <h2>Projects</h2>
    <p>
        Graphics Engine
        <br />
        Tracked RC robot
    </p>

    <h2>Skills</h2>
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

    <h2>Education</h2>
    <h3>IIT Bombay</h3>
    <h3>IITian's PACE</h3>
    <h3>Bombay Scottish School, Mahim</h3>
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
</style>
