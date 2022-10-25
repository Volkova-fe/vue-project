<template>
	<div>
		<h1>Страница с постами</h1>
		<my-input v-model="searchQuery" placeholder="Поиск..." />
		<div class="app_btns">
			<my-button>Создать пост</my-button>
			<my-select v-model="selectedSort" :options="sortOptions" />
		</div>
		<my-dialog v-model:show="dialogVisible">
			<post-form />
		</my-dialog>
		<post-list :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />
		<div v-else>Идет загрузка...</div>
	</div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios';
import { ref } from 'vue';
import usePosts from '@/hooks/usePosts.js';
import useSortedPost from '@/hooks/useSortedPost.js';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts.js'


export default {
	components: {
		PostForm, PostList
	},
	data() {
		return {
			dialogVisible: false,
			sortOptions: [
				{ value: 'title', name: 'По названию' },
				{ value: 'body', name: 'По содержимому' }
			]
		}
	},
	setup(props) {
		const { posts, isPostsLoading, totalPage } = usePosts(10);
		const { selectedSort, sortedPost } = useSortedPost(posts);
		const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPost);

		return {
			posts, isPostsLoading, totalPage,
			selectedSort, sortedPost,
			searchQuery, sortedAndSearchedPosts
		}
	}
}
</script>

<style>
.app_btns {
	margin: 15px 0;
	display: flex;
	justify-content: space-between;
}

.page__wrapper {
	display: flex;
	margin-top: 15px;
}

.page {
	border: 1px solid black;
	padding: 10px;
	cursor: pointer;
}

.current-page {
	border: 2px solid teal;
}

.observer {
	height: 30px;
}
</style>