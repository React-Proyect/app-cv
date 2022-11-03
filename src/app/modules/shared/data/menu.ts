export const HeaderNavItem = [
    {
        name: "Home",
        path: "/",
        active: window.location.pathname === '/' ? true : false
    },
    {
        name: "About",
        path: "about",
        active: window.location.pathname === '/about' ? true : false
    },
    {
        name: "Tech Stack",
        path: "technologies",
        active: window.location.pathname === '/technologies' ? true : false
    },
    {
        name: "Projects",
        path: "projects",
        active: window.location.pathname === '/projects' ? true : false
    },
    {
        name: "Contact",
        path: "contact",
        active: window.location.pathname === '/contact' ? true : false
    },
    {
        child: [
            {
                alt: "icon-github",
                img: "github",
                path: "https://github.com/UN1T7D"
            },
            {
                alt: "icon-twitter",
                img: "twitter",
                path: "https://twitter.com/UN1T7D"
            },
            {
                alt: "icon-LinkedIn",
                img: "linkedin",
                path: "https://www.linkedin.com/in/kevin-vasquez-46a0701b4/"
            }
        ]
    }
];
