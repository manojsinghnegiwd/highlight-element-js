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
		this.highlightedDiv = document.createElement("div")
		this.highlightedDiv.style.borderRadius = `5px`
		this.highlightedDiv.style.width = `${dims.width}px`
		this.highlightedDiv.style.height = `${dims.height}px`
		this.highlightedDiv.style.left = `${dims.left}px`
		this.highlightedDiv.style.top = `${dims.top}px`
		this.highlightedDiv.style.position = "absolute"
		this.highlightedDiv.style.border = "2px solid lightgrey"
        this.highlightedDiv.style.zIndex = "99999999"
        this.highlightedDiv.id = "capture-element-highlighted-div"
        this.highlightedDiv.style.pointerEvents = "none"
        document.body.appendChild(this.highlightedDiv)
    }
}
