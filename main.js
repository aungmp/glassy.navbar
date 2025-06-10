document.addEventListener('DOMContentLoaded',()=>{
    const openIcon=document.querySelector('.open-icon');
    const closeIcon=document.querySelector('.close-icon');
    const navLink=document.querySelector('.nav-links');
    const dropdowns=document.querySelectorAll('.dropdown');

    //toggle menu bar

    openIcon.addEventListener('click',()=>{
        openIcon.classList.add('close');
        closeIcon.classList.remove('close');
        navLink.classList.add('open');

    })

    closeIcon.addEventListener('click',()=>{
        closeIcon.classList.add('close');
        openIcon.classList.remove('close');
        navLink.classList.remove('open');
    })

    dropdowns.forEach(singleDrop=>{
        singleDrop.addEventListener('click',()=>{
            singleDrop.classList.toggle('open');
        })
    })
})