// Theme switching functionality and interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');
    const themeStyle = document.getElementById('theme-style');
    const desktopContainer = document.getElementById('desktop-container');
    const mainContent = document.getElementById('main-content');
    const footer = document.getElementById('footer');
    
    // Available themes array
    const themes = ['retro', 'trail', 'desktop', 'cyberpunk', 'dossier'];
    let currentThemeIndex = 0; // Start with the first theme (retro)
    
    // Initialize with default theme (retro)
    setTheme(themes[currentThemeIndex]);
    
    // Theme change handler for toggle button
    themeToggleBtn.addEventListener('click', function() {
        // Rotate through themes
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        setTheme(themes[currentThemeIndex]);
        
        // Add rotation animation to the icon
        themeToggleIcon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggleIcon.style.transform = 'rotate(0)';
        }, 500);
    });
    
    function setTheme(theme) {
        // Set the appropriate stylesheet
        themeStyle.href = `styles/${theme}.css`;
        
        // Handle special case for desktop theme
        if (theme === 'desktop') {
            desktopContainer.classList.remove('hidden');
            mainContent.classList.add('hidden');
            footer.classList.add('hidden');
            setupDesktopTheme();
            
            // Change the icon to a computer for desktop theme
            themeToggleIcon.className = 'fas fa-desktop';
        } else {
            desktopContainer.classList.add('hidden');
            mainContent.classList.remove('hidden');
            footer.classList.remove('hidden');
            
            // Update the icon based on the theme
            updateThemeIcon(theme);
        }
        
        // Add theme class to body for theme-specific styling
        document.body.className = '';
        document.body.classList.add(`theme-${theme}`);
    }
    
    // Update the theme toggle icon based on current theme
    function updateThemeIcon(theme) {
        switch(theme) {
            case 'retro':
                themeToggleIcon.className = 'fas fa-sun';
                break;
            case 'trail':
                themeToggleIcon.className = 'fas fa-tree';
                break;
            case 'cyberpunk':
                themeToggleIcon.className = 'fas fa-bolt';
                break;
            case 'dossier':
                themeToggleIcon.className = 'fas fa-file-alt';
                break;
            default:
                themeToggleIcon.className = 'fas fa-sun';
        }
    }
    
    // Setup desktop theme windows and interactions
    function setupDesktopTheme() {
        const desktopIcons = document.querySelectorAll('.desktop-icon');
        
        // Remove any existing windows
        document.querySelectorAll('.desktop-window').forEach(win => win.remove());
        
        // Setup click handlers for desktop icons
        desktopIcons.forEach(icon => {
            // Remove previous event listeners to prevent duplicates
            const clonedIcon = icon.cloneNode(true);
            icon.parentNode.replaceChild(clonedIcon, icon);
            
            clonedIcon.addEventListener('click', function() {
                const windowType = this.getAttribute('data-window');
                openDesktopWindow(windowType);
            });
        });
    }
    
    function openDesktopWindow(windowType) {
        // Close existing window of same type if open
        const existingWindow = document.querySelector(`.desktop-window[data-window="${windowType}"]`);
        if (existingWindow) {
            existingWindow.remove();
            return;
        }
        
        // Create new window
        const windowEl = document.createElement('div');
        windowEl.className = 'desktop-window';
        windowEl.setAttribute('data-window', windowType);
        
        // Window title bar
        const titleBar = document.createElement('div');
        titleBar.className = 'window-title-bar';
        
        // Window title
        const title = document.createElement('span');
        title.className = 'window-title';
        
        // Close button
        const closeBtn = document.createElement('button');
        closeBtn.className = 'window-close';
        closeBtn.textContent = 'X';
        closeBtn.addEventListener('click', function() {
            windowEl.remove();
        });
        
        // Window content
        const content = document.createElement('div');
        content.className = 'window-content';
        
        // Fill content based on window type
        switch(windowType) {
            case 'about':
                title.textContent = 'About Me';
                content.innerHTML = document.getElementById('about-section').innerHTML;
                break;
            case 'interests':
                title.textContent = 'Interests & Hobbies';
                content.innerHTML = document.getElementById('interests-section').innerHTML;
                break;
            case 'contact':
                title.textContent = 'Contact Me';
                content.innerHTML = document.getElementById('contact-section').innerHTML;
                break;
            case 'github':
                title.textContent = 'GitHub';
                content.innerHTML = '<p>Visit my GitHub profile at <a href="https://github.com/"><i class="fab fa-github"></i> github.com/iansotnek</a></p>';
                break;
            case 'bluesky':
                title.textContent = 'Bluesky';
                content.innerHTML = '<p>Follow me on Bluesky at <a href="https://bsky.app/"><i class="fas fa-cloud"></i> @iansotnek.bsky.social</a></p>';
                break;
            case 'linkedin':
                title.textContent = 'LinkedIn';
                content.innerHTML = '<p>Connect with me on LinkedIn at <a href="https://linkedin.com/"><i class="fab fa-linkedin"></i> linkedin.com/in/iansotnek</a></p>';
                break;
            case 'scholar':
                title.textContent = 'Google Scholar';
                content.innerHTML = '<p>View my academic publications on <a href="https://scholar.google.com/"><i class="fas fa-graduation-cap"></i> Google Scholar</a></p>';
                break;
        }
        
        // Assemble window
        titleBar.appendChild(title);
        titleBar.appendChild(closeBtn);
        windowEl.appendChild(titleBar);
        windowEl.appendChild(content);
        
        // Make window draggable
        makeDraggable(windowEl, titleBar);
        
        // Add to body
        document.body.appendChild(windowEl);
        
        // Position randomly in viewport
        const maxX = window.innerWidth - 320;
        const maxY = window.innerHeight - 240;
        windowEl.style.left = Math.floor(Math.random() * maxX) + 'px';
        windowEl.style.top = Math.floor(Math.random() * maxY) + 'px';
    }
    
    // Make elements draggable
    function makeDraggable(element, handle) {
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        handle.onmousedown = dragMouseDown;
        
        function dragMouseDown(e) {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            
            // Bring window to front
            const windows = document.querySelectorAll('.desktop-window');
            windows.forEach(win => win.style.zIndex = 100);
            element.style.zIndex = 101;
        }
        
        function elementDrag(e) {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
        }
        
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
});