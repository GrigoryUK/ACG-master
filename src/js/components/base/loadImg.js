import lozad from 'lozad'

export function loadingImg() {
	const observer = lozad('.lozad', {
		rootMargin: '50% 0%',
		threshold: 0.1,
		// enableAutoReload: true,

		// loaded: function(el) {
		// 	el.classList.remove('loading');

		// }
	});
	observer.observe();


}
