//console.log('welcome to JS')
//window.alert('welcome to JS')
//window.document.body
// window.addEventListener(
//     'DOMContentLoaded',
//     //in-line anonymous function
//     function () {
//         changeHeaderText('<i>welcome to web app dev using HTML and JS</i>')
//     }
// )
function changeHeaderText(newHeaderText) {
    var headerElementRef = document.getElementById('mainHeader')
    headerElementRef.innerHTML = newHeaderText
}
changeHeaderText('<i>welcome to web app dev using HTML and JS</i>')