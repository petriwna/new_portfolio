export interface NavLink {
    to: string
    label: string
}

export const navLinks: NavLink[] = [
    {to: '/', label: '_hello'},
    {to: '/about', label: '_about-me'},
    {to: '/projects', label: '_projects'},
    {to: '/contacts', label: '_contact-me'},
]
