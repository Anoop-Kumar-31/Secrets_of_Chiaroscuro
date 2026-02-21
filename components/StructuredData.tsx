import React from 'react';

export default function StructuredData() {
    const baseUrl = 'https://secrets-of-chiaroscuro.vercel.app';

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'The Secrets of CHIAROSCURO - The Fated Heir of Shadows and Light',
        description: 'A dark fantasy tale of supernatural royalty, forbidden love, and ancient betrayals. Enter a world where light and shadow collide.',
        url: baseUrl,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${baseUrl}?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
        }
    };

    const bookSchema = {
        '@context': 'https://schema.org',
        '@type': 'Book',
        name: 'The Secrets of CHIAROSCURO',
        alternateName: 'The Fated Heir of Shadows and Light',
        description: 'A dark fantasy tale of supernatural royalty, forbidden love, and ancient betrayals. Enter a world where light and shadow collide.',
        genre: ['Dark Fantasy', 'Urban Fantasy', 'Supernatural Fiction', 'Romance'],
        bookFormat: 'https://schema.org/EBook',
        inLanguage: 'en-US',
        author: {
            '@type': 'Person',
            name: 'Ak31'
        },
        url: baseUrl,
        about: {
            '@type': 'Thing',
            name: 'Supernatural Romance',
            description: 'A story about vampires, angels, and the collision of light and shadow'
        },
        keywords: 'dark fantasy, urban fantasy, supernatural, vampire, angel, forbidden love, fantasy novel, CHIAROSCURO'
    };

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'CHIAROSCURO',
        url: baseUrl,
        logo: `${baseUrl}/opengraph-image.png`,
        description: 'Official website for CHIAROSCURO - A dark fantasy novel series',
        sameAs: [
            // Add your social media profiles here
            // 'https://twitter.com/yourhandle',
            // 'https://www.instagram.com/yourhandle',
            // 'https://www.facebook.com/yourpage',
        ]
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: baseUrl
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
