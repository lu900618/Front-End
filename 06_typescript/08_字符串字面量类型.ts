type eventNames = 'click' | 'scroll' | 'mousemove'
function handleEvent(ele: Element, event: eventNames) {
  // todo...
}

handleEvent(document.getElementById('hello'), 'scroll')
// handleEvent(document.getElementById('hello'), 'dblclick')