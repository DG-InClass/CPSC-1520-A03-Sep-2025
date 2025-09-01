document.querySelector('main').addEventListener('click', function(ev) {
    //console.log(ev);
    const parent = ev.target.parentElement;
    const icon = parent.firstElementChild;
    const back = parent.lastElementChild;
    console.log({parent, icon, back});
    
    if(back.classList.contains('show')) {
        back.classList.remove('show');
        icon.classList.add('show');
    } else {
        back.classList.add('show');
        icon.classList.remove('show');
    }
})