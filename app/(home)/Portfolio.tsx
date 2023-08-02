import React from 'react';
import { Content } from '../(shared)/Content';
import speedoc1 from '/public/assets/speedoc-desktop.png';
import blog1 from 'public/assets/blog-desktop.png';
import blog2 from 'public/assets/blog-mobile.png';
import creperie1 from 'public/assets/creperie1-desktop.png';
import creperie2 from 'public/assets/creperie2-desktop.png';

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <div className='my-5'>
      <section id='Portfolio' className=' py-8'>
        <Content
          title='Speedoc Corporate Website'
          titleLink='https://www.speedoc.com'
          subtitle='Speedoc corporate website'
          images={[
            {
              desktop: {
                path: speedoc1.src,
                alt: 'Speedoc Corporate Website',
                width: 700,
                height: 600,
                priority: true,
              },
              mobile: {
                path: speedoc1.src,
                alt: 'Speedoc Corporate Website',
                width: 500,
                height: 450,
                priority: true,
              },
            },
          ]}
          imageLeft={false}
          features={[
            {
              title: 'Full Headless CMS',
              description:
                'Payload CMS serving all content, images, and site-wide variables',
            },
            {
              title: 'Booking, WhatsApp, and Jotform',
              description:
                'Incorporated multiple booking and contact forms to increase conversions.',
            },
          ]}
        />
        <Content
          title='La Crêperie Mobile'
          titleLink='https://creperie-mobile.at/'
          subtitle='Marketing Website for La Crêperie Mobile Food Truck & Catering'
          images={[
            {
              desktop: {
                path: creperie1.src,
                alt: 'AI Blog App',
                width: 800,
                height: 600,
              },
              mobile: {
                path: creperie1.src,
                alt: 'AI Blog App',
                width: 500,
                height: 400,
              },
            },
            {
              desktop: {
                path: creperie2.src,
                alt: 'AI Blog App mobile',
                width: 800,
                height: 600,
              },
              mobile: {
                path: creperie2.src,
                alt: 'AI Blog App mobile',
                width: 500,
                height: 400,
              },
            },
          ]}
          imageLeft={true}
          features={[
            {
              title: 'Next.js migration',
              description:
                'Migrated a no-code export to Next.js to improve performance and SEO',
            },
            {
              title: 'Tailwind CSS',
              description:
                'Full responsive site using Talwind CSS and custom CSS',
            },
          ]}
        />
        <Content
          title='AI Blog App'
          titleLink='https://blog-ai-app-ten.vercel.app/'
          subtitle='Personal Next.js sandbox project to experiment with OpenAI and Tip Tap editor'
          images={[
            {
              desktop: {
                path: blog1.src,
                alt: 'AI Blog App',
                width: 600,
                height: 600,
              },
              mobile: {
                path: blog1.src,
                alt: 'AI Blog App',
                width: 400,
                height: 400,
              },
            },
            {
              desktop: {
                path: blog2.src,
                alt: 'AI Blog App mobile',
                width: 300,
                height: 500,
              },
              mobile: {
                path: blog2.src,
                alt: 'AI Blog App mobile',
                width: 350,
                height: 500,
              },
            },
          ]}
          imageLeft={false}
          features={[
            {
              title: 'Prisma and MySQL',
              description:
                'MySQL database hosted on Planetscale and interfaced with Prisma',
            },
            {
              title: 'OpenAI API',
              description:
                'Uses OpenAI API to generate blog content based on the title and tone set by the user.',
            },
          ]}
        />
      </section>
    </div>
  );
};

export default Portfolio;
