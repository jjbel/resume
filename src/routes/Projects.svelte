<script>
    import Card from './Card.svelte';
    import softbody from '$lib/assets/softbody.gif';
    import hilbert_curve from '$lib/assets/hilbert_curve.gif';
</script>

<p>
    <Card src={softbody} link="softbody">
        <span slot="title">Simulating Softbodies</span>
        <span slot="info">in Samarium</span>
    </Card>

    <Card src={hilbert_curve} link="hilbert_curve">
        <span slot="title">Animating the Hilbert Curve</span>
        <span slot="info">in Samarium</span>
    </Card>
    <!-- <Card>Tracked RC robot</Card> -->
</p>

<style>
    p {
        display: flex;
        /* TODO flex stuff */
    }
</style>
