import twemoji from 'twemoji'

export default function (node: HTMLElement) {
	twemoji.parse(node)
	return {
		destroy() {
			
		}
	}
}