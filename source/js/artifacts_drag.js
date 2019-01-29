(function () {
    var shopElement = document.querySelector('.setup-artifacts-shop');
    var draggedItem = null;

    shopElement.addEventListener('dragstart', function (evt) {
        if (evt.target.tagName.toLowerCase() === 'img') {
            draggedItem = evt.target;
            evt.dataTransfer.setData('text/plain', evt.target.alt);
        };
    });

    var atrifactsElement = document.querySelector('.setup-artifacts');

    atrifactsElement.addEventListener('dragover', function (evt) {
        evt.preventDefault();
        return false;
    });

    atrifactsElement.addEventListener('drop', function (evt) {
        evt.target.style.backgroundColor = '';
        evt.target.appendChild(draggedItem);
    });

    atrifactsElement.addEventListener('dragenter', function (evt) {
        evt.target.style.backgroundColor = 'yellow';
        evt.preventDefault();
    });

    atrifactsElement.addEventListener('dragleave', function (evt) {
        evt.target.style.backgroundColor = '';
        evt.preventDefault();
    });
})();