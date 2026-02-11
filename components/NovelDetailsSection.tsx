'use client';

import Image from 'next/image';
import { novelDetails } from '@/data/novelDetails';

export default function NovelDetailsSection() {
  return (
    <section id="details" className="relative py-20 px-4 bg-linear-to-b from-bg-primary via-bg-secondary to-bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-(family-name:--font-heading) mb-4">
            About the Novel
          </h2>
          <div className="section-divider my-8" />
        </div>

        {/* Main Content - Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Left Side - Poster */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Poster Image */}
              <Image
                src={novelDetails.poster}
                alt={novelDetails.title}
                width={450}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                priority
                quality={100}
              />
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="w-full lg:w-3/5 space-y-4">
            {/* Title & Author */}
            <div>
              <h1 className="text-4xl font-(family-name:--font-heading) text-shadow-amber-700 mb-0">
                {novelDetails.title}
              </h1>
              <p className="text-xl text-accent-ember font-(family-name:--font-heading-alt) italic mb-2">
                {novelDetails.subtitle}
              </p>
              <p className="text-muted text-sm">by <span className="text-amber-700 italic">{novelDetails.author}</span></p>
            </div>

            {/* Metadata Grid */}
            <div className="glass-card p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    label: 'Status',
                    value: novelDetails.metadata.status,
                    color: novelDetails.metadata.status === 'Ongoing' ? 'text-green-500' : 'text-blue-500',
                  },
                  {
                    label: 'Chapters',
                    value: `${novelDetails.metadata.chapters}+`,
                    color: 'text-amber-600',
                  },
                  {
                    label: 'Rating',
                    value: novelDetails.metadata.rating,
                    color: 'text-amber-600',
                    suffix: '★',
                  },
                  {
                    label: 'Views',
                    value: novelDetails.metadata.views,
                    color: 'text-yellow-500',
                  },
                  {
                    label: 'Published',
                    value: novelDetails.metadata.published,
                    color: 'text-primary',
                  },
                  {
                    label: 'Genre',
                    value: novelDetails.metadata.genre[0],
                    color: 'text-gray-400',

                  },
                ].map((item, index) => (
                  <div key={index}>
                    <p className="text-muted text-xs font-extrabold uppercase tracking-wider mb-1">{item.label}</p>
                    {item.suffix ? (
                      <div className="flex items-center gap-2">
                        <p className={`${item.color} text-base lg:text-base font-semibold`}>
                          {item.value}
                        </p>
                        <span className={item.color}>{item.suffix}</span>
                      </div>
                    ) : (
                      <p className={`${item.color} text-base lg:text-base font-semibold`}>
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Synopsis */}
            <div>
              <h3 className="text-xl lg:text-xl font-(family-name:--font-heading) text-shadow-amber-700 mb-2">
                Synopsis:
              </h3>
              <div className="space-y-3 text-primary leading-relaxed">
                {novelDetails.synopsis.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-sm">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-xl font-(family-name:--font-heading) text-muted mb-2">
                Tags:
              </h3>
              <div className="flex flex-wrap gap-3">
                {novelDetails.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-md text-sm font-medium border-amber-50 border hover:text-amber-600 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Reading Platforms */}
            <div>
              <h3 className="text-xl lg:text-xl font-(family-name:--font-heading) text-shadow-amber-700 mb-2">
                Read Now:
              </h3>
              <div className="flex flex-wrap gap-4">
                {novelDetails.platforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-linear-to-r from-amber-700/20 to-amber-500/20 border border-amber-600/50 rounded-lg hover:border-amber-600 hover:from-amber-600/20 hover:to-amber-500/20 transition-all duration-300 group"
                  >
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-base lg:text-base font-semibold text-primary group-hover:text-amber-700 transition-colors duration-300">
                      {platform.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
