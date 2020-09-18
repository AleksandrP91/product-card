let mySort = document.querySelector('#sort-asc');
let mySortDesc = document.querySelector('#sort-desc');

mySort.addEventListener('click', function  mySort() {
        let nav = document.querySelector('.wrap');
    
        for (let i = 0; i < nav.children.length; i++) {
            for (let j = i; j < nav.children.length; j++) {
                if (+nav.children[i].getAttribute('data-price') > +nav.children[j].getAttribute('data-price')) {
                    replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                    insertAfter(replacedNode, nav.children[i]);
                }
            }
        }
    })

mySortDesc.addEventListener('click', function  mySort() {
        let nav = document.querySelector('.wrap');
    
        for (let i = 0; i < nav.children.length; i++) {
            for (let j = i; j < nav.children.length; j++) {
                if (+nav.children[i].getAttribute('data-price') < +nav.children[j].getAttribute('data-price')) {
                    replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
                    insertAfter(replacedNode, nav.children[i]);
                }
            }
        }
    })

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}