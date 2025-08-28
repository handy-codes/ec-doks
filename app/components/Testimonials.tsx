// components/Testimonials.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Prince Owo',
      position: 'Hotel Manager',
      content: 'EC DOKS has been our trusted supplier for over 5 years. Their products are always of the highest quality and their service is exceptional.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Jane Bryan',
      position: 'Food & Bevearage Manager',
      content: 'We rely on EC DOKS for all our hotel supplies. Their delivery is always on time and their team is very professional.',
      avatar: 'https://media.istockphoto.com/id/1389857295/photo/african-american-woman-bakers-looking-at-camera-chef-baker-in-a-chef-dress-and-hat-cooking.jpg?b=1&s=612x612&w=0&k=20&c=ZyfplfqcLIawKpER1c2BSlq5KGDgUuAW7MPoq1Xl4oQ=',
    },
    {
      name: 'Sonia Iwuh',
      position: 'Executive Chef',
      content: 'The steak sugar and chafing gas from EC DOKS are top-notch. I highly recommend them to any hotel or restaurant.',
      avatar: 'https://media.istockphoto.com/id/1389857295/photo/african-american-woman-bakers-looking-at-camera-chef-baker-in-a-chef-dress-and-hat-cooking.jpg?b=1&s=612x612&w=0&k=20&c=ZyfplfqcLIawKpER1c2BSlq5KGDgUuAW7MPoq1Xl4oQ=',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-600">&quot;{testimonial.content}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;