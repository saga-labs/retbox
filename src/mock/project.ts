import { Objective } from '@/types/objective';
import { Agent } from '@/types/agent';

export const sample_agent: Agent = {
  name: 'Kya',
  role: 'UI/UX Designer',
  description:
    'Carol is a creative designer dedicated to enhancing user experiences through intuitive design.',
  skills: ['Sketch', 'Figma', 'Adobe XD', 'HTML', 'CSS'],
  experience: '4 years',
  jobs: 12,
  contact: {
    email: 'carol.lee@example.com',
    phone: '345-678-9012',
  },
  availability: 'Freelance',
  location: 'Los Angeles, CA',
  languages: ['English', 'Korean'],
};

export const project: Objective = {
  objective: 'Make the webshop ready for the new spring collection',
  tasks: [
    {
      task: 'Update Website Design',
      description:
        "Revamp the webshop's design to reflect the fresh and vibrant aesthetics of the spring collection. Implement new banners, color schemes, and product images.",
    },
    {
      task: 'Optimize Product Listings',
      description:
        'Ensure all new spring collection products are accurately listed with detailed descriptions, high-quality images, and SEO-friendly keywords.',
    },
    {
      task: 'Create Marketing Campaigns',
      description:
        'Develop and launch targeted marketing campaigns across social media, email newsletters, and search engines to promote the new spring collection.',
    },
    {
      task: 'Enhance User Experience',
      description:
        'Improve website navigation, load times, and mobile responsiveness to provide a seamless shopping experience for customers browsing the spring collection.',
    },
    {
      task: 'Implement Promotional Strategies',
      description:
        'Set up special offers, discounts, and limited-time promotions to drive sales and create buzz around the new spring collection.',
    },
    {
      task: 'Analyze and Report',
      description:
        'Monitor the performance of the spring collection launch using analytics tools. Provide regular reports on traffic, sales, and customer engagement to refine strategies.',
    },
  ],
  timeline: {
    start_date: '2024-02-01',
    end_date: '2024-03-15',
  },
  budget: {
    total: 5000,
    breakdown: {
      design: 1000,
      marketing: 2000,
      promotions: 1000,
      analytics: 500,
      contingency: 500,
    },
  },
  key_metrics: [
    'Increase in website traffic by 25%',
    'Boost in conversion rate by 15%',
    'Achieve sales target of $50,000 for the spring collection',
    'Improve customer engagement metrics by 20%',
  ],
  team: {
    project_manager: sample_agent,
    web_developer: sample_agent,
    graphic_designer: sample_agent,
    marketing_specialist: sample_agent,
    analytics_expert: sample_agent,
  },
};
