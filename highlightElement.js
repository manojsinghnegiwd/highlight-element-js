window["HighlightElement"] = function (selector, config) {
    this.targetElement = null
    this.highlightedDiv = null

    if (selector instanceof HTMLElement) {
        this.targetElement = selector
    } else {
        this.targetElement = document.querySelector(selector)
    }

    this.highlight = function () {
        dims = this.targetElement.getBoundingClientRect()
		highlightedDiv = document.createElement("div")
		highlightedDiv.style.borderRadius = `5px`
		highlightedDiv.style.width = `${dims.width}px`
		highlightedDiv.style.height = `${dims.height}px`
		highlightedDiv.style.left = `${dims.left}px`
		highlightedDiv.style.top = `${dims.top}px`
		highlightedDiv.style.position = "absolute"
		highlightedDiv.style.border = "2px solid lightgrey"
        highlightedDiv.style.zIndex = "99999999"
        highlightedDiv.id = "capture-element-highlighted-div"
        highlightedDiv.style.pointerEvents = "none"
        document.body.appendChild(highlightedDiv)
    }
}
