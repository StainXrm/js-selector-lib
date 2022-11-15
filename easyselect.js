export default function X(arg) {
    let selects = document.querySelectorAll(arg)
    // let selectArr = Array.from(selects);
    return new DOMNodes(selects);
}

class DOMNodes {
    constructor(htmlArr) {
        this.htmlArr = htmlArr;
    }

    css(option, set) {
        if (!option) return this;
        if (!set) {
            this.htmlArr.forEach(function (element) {
                let style = getComputedStyle(element).getPropertyValue(option);
                console.log(style);
            })
            return this
        }
        this.htmlArr.forEach(function (element) {
            element.style[option] = set;
        })
    }

    replace(arg) {
        if (!arg) return this;
        this.htmlArr.forEach(function (element) {
            element.innerHTML = arg;
        })
        return this;
    }

    empty() {
        this.htmlArr.forEach(function (element) {
            element.innerHTML = "";
        })
        return this;
    }
}

// console.log(X())