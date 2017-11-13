<template>
	<div class="centre">
		<h1>Vue boilderplate</h1>
		<p class="small">v{{version}}</p>
		<p>Node | Express.io | Vue | Gulp | Spice</p>
	</div>
</template>

<script>
	import appData from '../../package.json';
	export default {
		data() {
			return {
				version: appData.version,
			};
		},
		ready() {
			io.emit('ready');
			io.on('talk', function(data) {
				alert(data.message);
			});
		},
	};
</script>
