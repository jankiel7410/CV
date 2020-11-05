import twemoji from 'twemoji'

export default async function (node: HTMLElement) {
	twemoji.parse(node)
	return {
		destroy() {
			
		}
	}
}