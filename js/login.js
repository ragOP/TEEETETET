document.addEventListener('DOMContentLoaded', () => {
    var data = JSON.parse(document.getElementById('variables').innerHTML);
    storeUserSession();
})