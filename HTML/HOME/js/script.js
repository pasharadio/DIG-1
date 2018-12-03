let links = document.querySelectorAll('.sub-menu a');

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function () {
        for(let j = 0; j < links.length; j++){
            links[j].parentElement.classList.remove('active');
        }
        this.parentElement.classList.add('active');
    })
}

var isSolutionDrowed = false;
var isWorkWithDrowed = false;

var drawConfig = {duration: 300, start: 'autostart'};

setTimeout(function() {
    var svgs = document.querySelectorAll('.svg');
    for(var i = 0; i < svgs.length; i++) {
        svgs[i].style.stroke = '#e87722';
    }
    new Vivus('infrastructure-svg', drawConfig);
}, 2000);

window.onscroll = function() {
    if(window.pageYOffset + document.body.clientHeight > 800) {
        if (!isSolutionDrowed) {
            isSolutionDrowed = true;
            new Vivus('solutions-svg', drawConfig);
        }
    }
    if(window.pageYOffset + document.body.clientHeight > 1600) {
        if(!isWorkWithDrowed) {
            isWorkWithDrowed = true;
            new Vivus('work-with-svg', drawConfig);
        }
    }
};

document.querySelector('.solutions-link a').addEventListener('click', function () {
    new Vivus('solutions-svg', drawConfig);
});

document.querySelector('.work-with-link a').addEventListener('click', function () {
    new Vivus('work-with-svg', drawConfig);
});



