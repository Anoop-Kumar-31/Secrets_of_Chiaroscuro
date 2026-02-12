import React from 'react';

export default function StructuredData() {
    const baseUrl = 'https://chiaroscuro-novel.com'; // Update with your actual domain

    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'CHIAROSCURO - The Secrets of Light & Shadow',
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
        name: 'CHIAROSCURO',
        alternateName: 'The Secrets of Light & Shadow',
        description: 'A dark fantasy tale of supernatural royalty, forbidden love, and ancient betrayals. Enter a world where light and shadow collide.',
        genre: ['Dark Fantasy', 'Urban Fantasy', 'Supernatural Fiction', 'Romance'],
        bookFormat: 'https://schema.org/EBook',
        inLanguage: 'en-US',
        author: {
            '@type': 'Person',
            name: 'CHIAROSCURO'
        },
        url: baseUrl,
        about: {
            '@type': 'Thing',
            name: 'Supernatural Romance',
            description: 'A story about vampires, angels, and the collision of light and shadow'
        },
        keywords: 'dark fantasy, urban fantasy, supernatural, vampire, angel, forbidden love, fantasy novel'
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
