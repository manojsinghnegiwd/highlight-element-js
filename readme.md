Highlight Element JS
=======

A small minimal library which highlight the given element.

How to use
=======

```javascript
const elementHighlighter = new HighlightElement("#highlight-me")
elementHighlighter.highlight()
```

**`new HighlightElement(element: HTMLElement | String, config: Config)`**

You can pass two arguments to `HighlightElement` constructor

| Name                  | Default         | value                             | Description   |
| --------------------- | --------------- | --------------------------------- | ------------- |
| element               | `undefined`     | `HTMLElement or String`           | The element we wants to highlight |
| config                | `undefined`     | `{ style: CSSStyleDeclaration }`  | A config object which can contains `style`  |

Methods
=======

**`highlight(config)`**

Highlight an element

| Name                  | Default         | value                         | Description   |
| --------------------- | --------------- | ----------------------------- | ------------- |
| config                | `undefined`     | `{ scrollIntoView: Object }`  | A config object which can contains `scrollIntoView`. `scrollIntoView` scroll the element into view when higlighted  |

```javascript
const elementHighlighter = new HighlightElement("#highlight-me")
elementHighlighter.highlight()
```

**`unHighlight()`**

unHighlight an element

```javascript
const elementHighlighter = new HighlightElement("#highlight-me")
elementHighlighter.highlight()
elementHighlighter.unHighlight()
```

**`unHighlightAll()`**

unHighlight All highlighted elements

```javascript
const elementHighlighter = new HighlightElement("#highlight-me")
const elementHighlighterSecond = new HighlightElement("#highlight-me-second")
elementHighlighter.highlight()
elementHighlighterSecond.highlight()
elementHighlighter.unHighlightAll()
```

Examples
======

**`With config object`**

```javascript
const elementHighlighter = new HighlightElement("#highlight-me",
    {
        style: {
            backgroundColor: "#333",
            opacity: 0.1
        }
    }
)
elementHighlighter.highlight()
```

### About Me

 * [My website](http://manojsinghnegi.com) (manojsinghnegi.com)
 * [Medium](https://medium.com/@manojsinghnegi) (@manojsinghnegi)
 * [Twitter](http://twitter.com/manojnegiwd) (@manojnegiwd)
