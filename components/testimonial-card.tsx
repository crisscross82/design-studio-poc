/**
 * TestimonialCard Component
 *
 * Generated from Design Spec: AiSU Marketing Homepage
 * Aesthetic: Modern & Bold (Stripe + Linear inspired)
 * Colors: Navy (#1e3a8a) primary, Electric Blue (#3b82f6) accent
 * Typography: Inter (400, 500, 700)
 *
 * @example
 * ```tsx
 * <TestimonialCard
 *   quote="AiSU transformed how our team finds information."
 *   author="Sarah Johnson"
 *   title="VP of Operations"
 *   company="TechCorp"
 *   avatar="/avatars/sarah.jpg"
 * />
 * ```
 */

import React from 'react';

// In real implementation, this would come from class-variance-authority
// For POC, we'll use inline approach
type VariantProps = {
  variant?: 'single' | 'grid' | 'carousel';
  size?: 'default' | 'large';
};

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps {
  /** Customer quote/testimonial text */
  quote: string;

  /** Customer name */
  author: string;

  /** Customer job title */
  title: string;

  /** Customer company name */
  company: string;

  /** Avatar image URL (or placeholder) */
  avatar?: string;

  /** Company logo URL (optional) */
  companyLogo?: string;

  /** Star rating (1-5, optional) */
  rating?: number;
}

/**
 * TestimonialCard - Social proof component with customer quotes
 *
 * Variants:
 * - single: Large hero testimonial with prominent quote
 * - grid: Compact card for 3-column grid layout
 * - carousel: Medium card for carousel/slider
 *
 * Sizes:
 * - default: Standard padding and typography
 * - large: Increased spacing for hero placement
 */
export const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({
    quote,
    author,
    title,
    company,
    avatar,
    companyLogo,
    rating,
    variant = 'grid',
    size = 'default',
    className = '',
    ...props
  }, ref) => {
    // Design token application (from .design-spec.json)
    const baseClasses = [
      // Layout
      'relative',
      'flex',
      'flex-col',

      // Spacing (design spec: balanced density, 4pt base)
      size === 'large' ? 'gap-6 p-8' : 'gap-4 p-6',

      // Border radius (design spec: soft-rounded, 8-12px)
      'rounded-lg', // 0.5rem = 8px

      // Background (design spec: light/dark theme support)
      'bg-white dark:bg-slate-800',

      // Border (subtle, following design spec neutral colors)
      'border border-slate-200 dark:border-slate-700',

      // Shadow (design spec: soft shadows for depth)
      'shadow-md hover:shadow-lg',

      // Transition (design spec: fast-purposeful 150-200ms)
      'transition-all duration-200',

      // Hover effect (lift slightly, Linear-inspired)
      'hover:-translate-y-1',
    ].join(' ');

    // Variant-specific sizing
    const variantClasses = {
      single: 'max-w-3xl', // Large hero testimonial
      grid: 'max-w-sm', // Compact for 3-column grid
      carousel: 'max-w-md', // Medium for carousel
    };

    // Quote styling (design spec: Inter font, relaxed line-height)
    const quoteClasses = [
      'text-slate-700 dark:text-slate-200',
      'font-medium', // Inter 500
      size === 'large' ? 'text-xl' : 'text-base', // 1.25rem : 1rem
      'leading-relaxed', // 1.6 line-height
      variant === 'single' ? 'text-2xl' : '', // Extra large for hero
    ].filter(Boolean).join(' ');

    // Author name styling (design spec: bold hierarchy)
    const authorClasses = [
      'text-slate-900 dark:text-slate-100',
      'font-bold', // Inter 700
      'text-base',
    ].join(' ');

    // Title/company styling
    const metaClasses = [
      'text-slate-600 dark:text-slate-400',
      'font-regular', // Inter 400
      'text-sm',
    ].join(' ');

    // Avatar placeholder (design spec: navy + electric blue abstract)
    const avatarPlaceholder = (
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] flex items-center justify-center text-white font-bold">
        {author.charAt(0)}
      </div>
    );

    // Rating stars (if provided)
    const renderRating = rating && (
      <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-[#3b82f6]' : 'text-slate-300 dark:text-slate-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );

    return (
      <div
        ref={ref}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {/* Rating (if provided) */}
        {rating && renderRating}

        {/* Quote Icon (decorative, following Modern & Bold aesthetic) */}
        <div className="text-[#3b82f6] opacity-20">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote Text */}
        <blockquote className={quoteClasses}>
          "{quote}"
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center gap-4 mt-auto">
          {/* Avatar */}
          {avatar ? (
            <img
              src={avatar}
              alt={`${author} avatar`}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            avatarPlaceholder
          )}

          {/* Name, Title, Company */}
          <div className="flex-1">
            <div className={authorClasses}>{author}</div>
            <div className={metaClasses}>
              {title} at {company}
            </div>
          </div>

          {/* Company Logo (optional) */}
          {companyLogo && (
            <img
              src={companyLogo}
              alt={`${company} logo`}
              className="h-8 w-auto opacity-70"
            />
          )}
        </div>
      </div>
    );
  }
);

TestimonialCard.displayName = 'TestimonialCard';

/**
 * Design Token Mapping (from .design-spec.json):
 *
 * Colors:
 *   Primary: #1e3a8a (navy) - Used in avatar gradient
 *   Accent: #3b82f6 (electric blue) - Used in stars, quote icon
 *   Neutral Light: white bg, slate-700 text
 *   Neutral Dark: slate-800 bg, slate-200 text
 *
 * Typography:
 *   Font: Inter (applied via Tailwind defaults)
 *   Quote: font-medium (500), text-base (16px), leading-relaxed (1.6)
 *   Author: font-bold (700), text-base (16px)
 *   Meta: font-regular (400), text-sm (14px)
 *
 * Spacing:
 *   Default: gap-4 (1rem), p-6 (1.5rem)
 *   Large: gap-6 (1.5rem), p-8 (2rem)
 *
 * Effects:
 *   Border Radius: rounded-lg (0.5rem / 8px)
 *   Shadow: shadow-md (0 4px 6px)
 *   Transition: duration-200 (200ms, fast-purposeful)
 *   Hover: -translate-y-1 (lift), shadow-lg
 *
 * Accessibility:
 *   - Semantic HTML (blockquote)
 *   - ARIA labels for rating
 *   - Alt text for images
 *   - Focus indicators (browser default)
 *   - Keyboard navigable (native div)
 */
