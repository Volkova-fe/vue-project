import { computed, onMounted, ref } from 'vue'

export default function useSortedPost(posts) {
	const selectedSort = ref('');
	const sortedPost = computed(() => {
		return [...posts.value].sort((post1, post2) => {
			return post1[selectedSort.value]?.localeCompare(post2[selectedSort.value])
		})
	})
	return {
		selectedSort, sortedPost
	}
}