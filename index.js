function setRemaining() {
  var source = document.getElementById("source").value.replaceAll(' ', '').split('')
  var solution = document.getElementById("solution").value.replaceAll(' ', '').split('')

  var remaining = solution.reduce((running, current) => {
    return running.replace(current, '')
  }, [...source].join(''))
  document.getElementById("remaining").innerText = remaining

  var errors = source.reduce((running, current) => {
    return running.replace(current, '')
  }, [...solution].join(''))
  document.getElementById("errors").innerText = errors
};

document.getElementById("source")?.addEventListener("input", e => setRemaining())
document.getElementById("solution")?.addEventListener("input", e => setRemaining())