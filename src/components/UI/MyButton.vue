<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'my-button'
}
</script>

<style scoped>
.btn {
	align-self: flex-end;
	max-width: 80px;
	width: 100%;
	padding: 10px 15px;
	background: none;
	color: teal;
	border: 1px solid teal;
	cursor: pointer;
	margin-bottom: 10px;
}
</style>