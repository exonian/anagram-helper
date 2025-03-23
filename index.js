function setRemaining() {
  var source = document.getElementById("source").value.toUpperCase().replaceAll(' ', '').split('')
  var solution = document.getElementById("solution").value.toUpperCase().replaceAll(' ', '').split('')

  var remaining = solution.reduce((running, current) => {
    return running.replace(current, '')
  }, [...source].join(''))
  var remainingSpans = remaining.split('').map(x => '<span>' + x + '</span>').join('')
  document.getElementById("remaining").innerHTML = remainingSpans
  var remainingDiv = document.getElementById("remainingDiv")
  if (remaining.length === 0) {
    remainingDiv.style.display = 'none'
  }
  else remainingDiv.style.display = 'block'

  var errors = source.reduce((running, current) => {
    return running.replace(current, '')
  }, [...solution].join(''))
  var errorsSpans = errors.split('').map(x => '<span>' + x + '</span>').join('')
  document.getElementById("errors").innerHTML = errorsSpans
  if (errors.length === 0) {
    errorsDiv.style.display = 'none'
  }
  else errorsDiv.style.display = 'block'
};

function sourceAtoZ() {
  var sourceElement = document.getElementById("source")
  sourceElement.value = sourceElement.value.split('').sort().join('')
  setRemaining()
}

// shuffle array from https://stackoverflow.com/a/34377908
Array.prototype.shuffle = function() {
  let m = this.length, i;
  while (m) {
    i = (Math.random() * m--) >>> 0;
    [this[m], this[i]] = [this[i], this[m]]
  }
  return this;
}

function sourceRandom() {
  var sourceElement = document.getElementById("source")
  sourceElement.value = sourceElement.value.split('').shuffle().join('')
  setRemaining()
}

document.getElementById("source")?.addEventListener("input", e => setRemaining())
document.getElementById("solution")?.addEventListener("input", e => setRemaining())

setRemaining()