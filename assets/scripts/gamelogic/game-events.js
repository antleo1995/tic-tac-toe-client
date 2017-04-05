const putMarker = function (event) {
  console.log('Clicked a game cell')
  $(this).text('something')
  $(this).show()
}
module.exports = {
  putMarker
}
