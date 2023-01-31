'use strict';

const Open = document.querySelector('#open-btn');
const Close = document.querySelector('#close-btn');
const NavBar = document.querySelector('.navbar-nav');
const NavBarToggle = ()=> NavBar.classList.toggle('active');

Open.addEventListener('click' , NavBarToggle);
Close.addEventListener('click' , NavBarToggle);