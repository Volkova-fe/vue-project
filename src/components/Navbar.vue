<template>
	<div class="navbar">
		<div @click="$router.push('/')">Vue 3</div>
		<div class="navbar__btns">
			<my-button class="navbar__btn" @click="$router.push('/posts')">Посты</my-button>
			<my-button class="navbar__btn" @click="$router.push('/about')" style="margin-left: 20px;">О сайте</my-button>
			<my-button class="navbar__btn" @click="$router.push('/store')" style="margin-left: 20px;">Store</my-button>
			<my-button class="navbar__btn" @click="$router.push('/composition')" style="margin-left: 20px;">Composition Api
			</my-button>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
	width: 100%;
	background-color: lightgrey;
	box-shadow: 2px 2px 4px gray;
	align-items: center;
	padding: 0 15px;
}

.navbar__btns {
	display: flex;
	flex-direction: row;
}

.navbar__btn {
	margin: 0;
}
</style>

