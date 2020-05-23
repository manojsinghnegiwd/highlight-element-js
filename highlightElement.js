window["HighlightElementsList"] = []

window["HighlightElement"] = function (selector, config) {

    // store this instance in the global array

    window["HighlightElementsList"].push(this)

    var self = this
    this.targetElement = null
    this.highlightedDiv = null
    this.config = config || {}
    this.style = this.config.style || {}

    if (selector instanceof HTMLElement) {
        this.targetElement = selector
    } else {
        this.targetElement = document.querySelector(selector)
    }

    this.highlight = function () {
        var dims = self.targetElement.getBoundingClientRect()
		self.highlightedDiv = document.createElement("div")
		self.highlightedDiv.style.borderRadius = `5px`
		self.highlightedDiv.style.width = `${dims.width}px`
		self.highlightedDiv.style.height = `${dims.height}px`
		self.highlightedDiv.style.left = `${dims.left}px`
		self.highlightedDiv.style.top = `${dims.top + window.scrollY}px`
		self.highlightedDiv.style.position = "absolute"
		self.highlightedDiv.style.border = "2px solid lightgrey"
        self.highlightedDiv.style.zIndex = "99999999"
        self.highlightedDiv.id = "capture-element-highlighted-div"
        self.highlightedDiv.style.pointerEvents = "none"

        Object.keys(self.style).map(
            function (key) {
                self.highlightedDiv.style[key] = self.style[key]
            }
        )

        document.body.appendChild(self.highlightedDiv)
    }

    this.unHighlight = function () {
        document.body.removeChild(self.highlightedDiv)
    }

    this.unHighlightAll = function () {
        window["HighlightElementsList"].forEach(function (instance) {
            instance.unHighlight()
        })
    }
}
