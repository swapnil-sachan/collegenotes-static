// Mobile navbar code

const mobile_navbar_open = document.getElementById('mobile-navbar-open');
const mobile_navbar_close = document.getElementById('mobile-navbar-close');
const mobileNavbarLinks = document.querySelector('.navbar-links');
const mobileNavbarButtons = document.querySelector('.mobile-navbar-buttons');

mobile_navbar_open.addEventListener('click', function() {
    openMobileNavbar()
});

mobile_navbar_close.addEventListener('click', function() {
    closeMobileNavbar()
});

function openMobileNavbar() {
    mobileNavbarLinks.classList.add('mobile-navbar-active');
    mobileNavbarButtons.classList.add('mobile-navbar-active');
}

function closeMobileNavbar() {
    mobileNavbarLinks.classList.remove('mobile-navbar-active');
    mobileNavbarButtons.classList.remove('mobile-navbar-active');
}

// Resources modal code

const resourcesTrigger = document.querySelector('#resources-modal-trigger');
const resourcesWrapper = document.querySelector('.resources-modal-wrapper');
const closeBtn = document.querySelector('.close');

resourcesTrigger.addEventListener('click', function() {
    openResourcesModal()
});

closeBtn.addEventListener('click', function() {
    closeResourcesModal();
});

resourcesWrapper.addEventListener('click', function(e) {
    if(e.target !== this) {
        return;
    }
    closeResourcesModal();
});

document.addEventListener('keydown', function(e) {
    if(e.key == 'Escape') {
        closeResourcesModal();
    }
});

function openResourcesModal() {
    resourcesWrapper.classList.add('resources-modal-active');
}

function closeResourcesModal() {
    resourcesWrapper.classList.remove('resources-modal-active');
}