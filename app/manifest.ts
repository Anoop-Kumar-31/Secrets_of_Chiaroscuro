import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'The Secrets of CHIAROSCURO - The Fated Heir of Shadows and Light',
        short_name: 'TSOC',
        description: 'A dark fantasy tale of supernatural royalty, forbidden love, and ancient betrayals. Enter a world where light and shadow collide.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#1a0a0a',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
