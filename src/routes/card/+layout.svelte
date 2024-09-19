<script>
	import SettingsLayout from '$lib/components/settings-layout.svelte';
</script>

<SettingsLayout>
	<slot slot="section" />
	<div slot="aside"></div>
</SettingsLayout>
