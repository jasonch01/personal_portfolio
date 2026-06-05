let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// Close menu when clicking outside
document.addEventListener('click', (event) => {
    // Only run this logic if we are on a screen layout where the menu can be open
    // Your media query cuts off at 1285px
    if (window.innerWidth <= 1285) {
        
        // 1. Check if the menu is currently visible/active
        if (navbar.classList.contains('active')) {
            
            // 2. Check if the click target is OUTSIDE the navbar container 
            // AND OUTSIDE the hamburger menu icon button
            const clickedInsideNavbar = navbar.contains(event.target);
            const clickedMenuIcon = menuIcon.contains(event.target);
            const clickedALink = event.target.tagName === 'A';
            
            if (!clickedInsideNavbar && !clickedMenuIcon) {
                // 3. Close the menu by removing the classes
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            }
            else if (clickedInsideNavbar && clickedALink) {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            }
        }
    }
});