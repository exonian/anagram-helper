function setRemaining() {
  var source = document.getElementById("source").value.replaceAll(' ', '').split('')
  var solution = document.getElementById("solution").value.replaceAll(' ', '').split('')

  var remaining = solution.reduce((running, current) => {
    return running.replace(current, '')
  }, [...source].join(''))
  var remainingSpans = remaining.split('').map(x => '<span>' + x + '</span>').join('')
  document.getElementById("remaining").innerHTML = remainingSpans

  var errors = source.reduce((running, current) => {
    return running.replace(current, '')
  }, [...solution].join(''))
  var errorsSpans = errors.split('').map(x => '<span>' + x + '</span>').join('')
  document.getElementById("errors").innerHTML = errorsSpans
};

document.getElementById("source")?.addEventListener("input", e => setRemaining())
document.getElementById("solution")?.addEventListener("input", e => setRemaining())