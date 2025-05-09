export interface SocialLink {
    href: string
    icon: string
    label: string
    className?: string
}

export const socialLinks: SocialLink[] = [
    {
        href: 'https://www.linkedin.com/in/nataliia-sychevska/',
        icon: 'linkedin',
        label: 'LinkedIn',
        className: 'footer__link--linkedin'
    },
    {
        href: 'https://github.com/petriwna',
        icon: 'git',
        label: 'GitHub',
        className: 'footer__link--icon'
    }
]
