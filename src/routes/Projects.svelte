<script>
    import Card from './Card.svelte';
    import softbody from '$lib/assets/softbody.gif'
</script>

<p>
    <!-- <Card src="$lib/assets/softbody.gif"><span slot="title">Graphics Engine</span></Card>
    <Card src="$lib/assets/softbody.gif"><span slot="title">Graphics Engine</span></Card>
    <Card src="$lib/assets/softbody.gif"><span slot="title">Graphics Engine</span></Card>
    <Card src="$lib/assets/softbody.gif"><span slot="title">Graphics Engine</span></Card> -->
    <Card src={softbody}><span slot="title">Simulating Softbodies</span></Card>
    <!-- <Card>Tracked RC robot</Card> -->
</p>

<style>
    p {
        display: flex;
        /* TODO flex stuff */
    }
</style>
