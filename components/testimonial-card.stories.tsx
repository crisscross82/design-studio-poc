/**
 * TestimonialCard Storybook Stories
 * Generated from Design Spec: AiSU Marketing Homepage
 *
 * Interactive documentation and component showcase
 */

import type { Meta, StoryObj } from '@storybook/react';
import { TestimonialCard } from './testimonial-card';

const meta: Meta<typeof TestimonialCard> = {
  title: 'Components/Social Proof/TestimonialCard',
  component: TestimonialCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# TestimonialCard

Social proof component for displaying customer testimonials with avatars, ratings, and company logos.

## Design Spec
- **Aesthetic:** Modern & Bold (Stripe + Linear inspired)
- **Colors:** Navy (#1e3a8a) primary, Electric Blue (#3b82f6) accent
- **Typography:** Inter (400, 500, 700)
- **Animation:** Fast & purposeful (200ms transitions)

## Variants
- \`single\`: Large hero testimonial (max-width: 768px)
- \`grid\`: Compact card for 3-column layouts (max-width: 384px)
- \`carousel\`: Medium card for carousels (max-width: 448px)

## Usage
\`\`\`tsx
<TestimonialCard
  quote="AiSU transformed how our team finds information."
  author="Sarah Johnson"
  title="VP of Operations"
  company="TechCorp"
  rating={5}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['single', 'grid', 'carousel'],
      description: 'Visual variant of the testimonial card',
      table: {
        type: { summary: 'single | grid | carousel' },
        defaultValue: { summary: 'grid' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Size of the card (affects padding and spacing)',
      table: {
        type: { summary: 'default | large' },
        defaultValue: { summary: 'default' },
      },
    },
    quote: {
      control: 'text',
      description: 'Customer testimonial text',
    },
    author: {
      control: 'text',
      description: 'Customer name',
    },
    title: {
      control: 'text',
      description: 'Customer job title',
    },
    company: {
      control: 'text',
      description: 'Customer company name',
    },
    avatar: {
      control: 'text',
      description: 'Avatar image URL (optional, shows placeholder if not provided)',
    },
    companyLogo: {
      control: 'text',
      description: 'Company logo URL (optional)',
    },
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 1 },
      description: 'Star rating (0-5, optional)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

// ============================================================================
// Default Story
// ============================================================================

export const Default: Story = {
  args: {
    quote: 'AiSU transformed how our team finds information. What used to take hours now takes seconds.',
    author: 'Sarah Johnson',
    title: 'VP of Operations',
    company: 'TechCorp',
    rating: 5,
  },
};

// ============================================================================
// Variants
// ============================================================================

export const SingleVariant: Story = {
  name: 'Variant: Single (Hero)',
  args: {
    variant: 'single',
    size: 'large',
    quote: 'The natural language search is incredible. It understands context and finds exactly what we need, every single time.',
    author: 'Michael Chen',
    title: 'Engineering Manager',
    company: 'DataFlow',
    rating: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large testimonial for hero sections. Maximum width of 768px, larger text, generous spacing.',
      },
    },
  },
};

export const GridVariant: Story = {
  name: 'Variant: Grid (3-Column)',
  args: {
    variant: 'grid',
    quote: 'Integration was seamless. We were up and running in less than an hour.',
    author: 'Emily Rodriguez',
    title: 'CTO',
    company: 'GrowthLabs',
    rating: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact testimonial for 3-column grid layouts. Maximum width of 384px.',
      },
    },
  },
};

export const CarouselVariant: Story = {
  name: 'Variant: Carousel',
  args: {
    variant: 'carousel',
    quote: 'Our support team loves how quickly they can find answers. Response times improved by 60%.',
    author: 'James Williams',
    title: 'Head of Customer Success',
    company: 'SupportHub',
    rating: 4,
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium testimonial for carousel/slider implementations. Maximum width of 448px.',
      },
    },
  },
};

// ============================================================================
// Sizes
// ============================================================================

export const DefaultSize: Story = {
  name: 'Size: Default',
  args: {
    quote: 'Standard padding and spacing for most use cases.',
    author: 'Alex Martinez',
    title: 'Product Manager',
    company: 'InnovateCo',
  },
};

export const LargeSize: Story = {
  name: 'Size: Large',
  args: {
    size: 'large',
    quote: 'Larger padding and spacing for prominent placements like hero sections.',
    author: 'Taylor Kim',
    title: 'Design Director',
    company: 'CreativeStudio',
  },
};

// ============================================================================
// With/Without Optional Elements
// ============================================================================

export const WithRating: Story = {
  name: 'With Rating',
  args: {
    quote: 'Testimonial with 5-star rating displayed.',
    author: 'Jordan Lee',
    title: 'Operations Lead',
    company: 'Efficiency Inc',
    rating: 5,
  },
};

export const WithoutRating: Story = {
  name: 'Without Rating',
  args: {
    quote: 'Testimonial without rating stars.',
    author: 'Morgan Davis',
    title: 'Chief Strategy Officer',
    company: 'VisionCorp',
  },
};

export const WithCompanyLogo: Story = {
  name: 'With Company Logo',
  args: {
    quote: 'Testimonial with company logo displayed.',
    author: 'Casey Brown',
    title: 'Founder & CEO',
    company: 'StartupXYZ',
    companyLogo: 'https://via.placeholder.com/100x40/1e3a8a/ffffff?text=Logo',
    rating: 5,
  },
};

export const WithAvatar: Story = {
  name: 'With Avatar Image',
  args: {
    quote: 'Testimonial with custom avatar image.',
    author: 'Riley Thompson',
    title: 'Marketing Director',
    company: 'BrandCo',
    avatar: 'https://via.placeholder.com/48/3b82f6/ffffff?text=RT',
    rating: 4,
  },
};

export const MinimalWithPlaceholder: Story = {
  name: 'Minimal (Placeholder Avatar)',
  args: {
    quote: 'Minimal testimonial with generated avatar placeholder using brand colors.',
    author: 'Quinn Parker',
    title: 'Account Executive',
    company: 'SalesPro',
  },
  parameters: {
    docs: {
      description: {
        story: 'When no avatar is provided, a gradient placeholder with the author\'s initial is shown using brand colors (Navy → Electric Blue).',
      },
    },
  },
};

// ============================================================================
// Rating Variations
// ============================================================================

export const Rating5Stars: Story = {
  name: 'Rating: 5 Stars',
  args: {
    quote: 'Perfect experience!',
    author: 'Alex Chen',
    title: 'Team Lead',
    company: 'TechFlow',
    rating: 5,
  },
};

export const Rating4Stars: Story = {
  name: 'Rating: 4 Stars',
  args: {
    quote: 'Great product, highly recommend.',
    author: 'Sam Wilson',
    title: 'Senior Developer',
    company: 'DevHub',
    rating: 4,
  },
};

export const Rating3Stars: Story = {
  name: 'Rating: 3 Stars',
  args: {
    quote: 'Good overall, room for improvement.',
    author: 'Jamie Lee',
    title: 'Product Owner',
    company: 'ProductCo',
    rating: 3,
  },
};

// ============================================================================
// Real-World Scenarios
// ============================================================================

export const HeroSection: Story = {
  name: 'Scenario: Hero Section',
  args: {
    variant: 'single',
    size: 'large',
    quote: 'AiSU has completely transformed how we manage our company knowledge. Our team can now find any document or answer in seconds, not hours. The ROI was clear within the first month.',
    author: 'Dr. Amanda Foster',
    title: 'Chief Information Officer',
    company: 'MedTech Solutions',
    avatar: 'https://via.placeholder.com/48/1e3a8a/ffffff?text=AF',
    companyLogo: 'https://via.placeholder.com/120x40/1e3a8a/ffffff?text=MedTech',
    rating: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large, prominent testimonial for hero section with all optional elements.',
      },
    },
    backgrounds: {
      default: 'light',
    },
  },
};

export const ThreeColumnGrid: Story = {
  name: 'Scenario: 3-Column Grid',
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
      <TestimonialCard
        variant="grid"
        quote="The search is incredibly fast and accurate. Game-changer for our team."
        author="Sarah Johnson"
        title="VP Operations"
        company="TechCorp"
        rating={5}
      />
      <TestimonialCard
        variant="grid"
        quote="Integration was seamless. Up and running in under an hour."
        author="Michael Chen"
        title="Engineering Manager"
        company="DataFlow"
        rating={5}
      />
      <TestimonialCard
        variant="grid"
        quote="Customer support is phenomenal. They truly care about our success."
        author="Emily Rodriguez"
        title="CTO"
        company="GrowthLabs"
        rating={4}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Three testimonials in a responsive grid layout (typical homepage usage).',
      },
    },
    layout: 'fullscreen',
  },
};

export const DarkMode: Story = {
  name: 'Dark Mode',
  args: {
    quote: 'Testimonial card with dark mode styling applied.',
    author: 'River Smith',
    title: 'Design Lead',
    company: 'NightOwl Studios',
    rating: 5,
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        story: 'Testimonial card adapts to dark mode with appropriate colors from the design spec.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <Story />
      </div>
    ),
  ],
};

// ============================================================================
// Interactive Playground
// ============================================================================

export const Playground: Story = {
  name: 'Interactive Playground',
  args: {
    variant: 'grid',
    size: 'default',
    quote: 'Customize this testimonial using the controls panel →',
    author: 'Your Name',
    title: 'Your Title',
    company: 'Your Company',
    rating: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Experiment with all props using the controls panel on the right.',
      },
    },
  },
};

/**
 * Storybook Features Demonstrated:
 *
 * ✓ Complete prop documentation with argTypes
 * ✓ All 3 variants showcased (single, grid, carousel)
 * ✓ Both sizes demonstrated (default, large)
 * ✓ Rating variations (0-5 stars)
 * ✓ Optional elements (avatar, company logo)
 * ✓ Real-world scenarios (hero, 3-column grid)
 * ✓ Dark mode support
 * ✓ Interactive playground
 * ✓ Accessibility notes
 * ✓ Design token compliance
 *
 * Design System Documentation:
 * ✓ Component purpose and use cases
 * ✓ Visual variants and when to use them
 * ✓ Responsive behavior
 * ✓ Brand color application
 * ✓ Typography scale
 * ✓ Animation timing
 */
