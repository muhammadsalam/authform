let panelTwo = document.querySelector('.two');
let panelOne = document.querySelector('.one');
let toggle = document.querySelector('.panel-toggle');
panelTwo.onclick = function(){
    if(!this.classList.contains('active')){
        this.classList.add('active');
        panelOne.classList.add('active');
        toggle.classList.add('active');
        this.parentNode.classList.add('active');
    }
};
toggle.onclick = function(){
    panelOne.classList.remove('active');
    panelTwo.classList.remove('active');
    toggle.classList.remove('active');
    this.parentNode.classList.remove('active');
}
