export default {
	props: {
		show: {
			type: Boolean,
			deflaut: false
		}
	},
	methods: {
		hideDialog() {
			this.$emit('update:show', false)
		}
	},
	mounted() {

	}
}