import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Sarah Mbeki',
      title: 'Dean, Faculty of Law',
      organization: 'Kampala International University',
      relationship: 'Academic Supervisor',
      content: "Korenilo's research on oil and gas laws demonstrates exceptional legal scholarship. His ability to analyze complex legal frameworks and their economic implications sets new standards in our field. He brings both theoretical rigor and practical experience to every discussion.",
      rating: 5,
      initials: 'SM'
    },
    {
      name: 'John Okello',
      title: 'General Manager',
      organization: 'Dar Petroleum Operating Company',
      relationship: 'Direct Supervisor',
      content: "Working with Korenilo as our Senior Contract Specialist has been transformative. His expertise in procurement and contract management has streamlined our operations significantly. He's a legal professional who truly understands both compliance and business efficiency.",
      rating: 5,
      initials: 'JO'
    },
    {
      name: 'Mary Akol',
      title: 'Managing Partner',
      organization: 'Spring & Co Advocate',
      relationship: 'Law Firm Partner',
      content: "Korenilo's commitment to legal excellence and client service is outstanding. He has handled complex litigation and contract negotiations with remarkable skill. His approach to legal practice is both strategic and ethically sound.",
      rating: 5,
      initials: 'MA'
    },
    {
      name: 'Dr. Peter Ochieng',
      title: 'Research Director',
      organization: 'African Journal of Business Law',
      relationship: 'Research Collaborator',
      content: "Collaborating with Korenilo on oil and gas legal research was inspiring. His interdisciplinary approach and ability to translate complex legal concepts into practical business insights made our work more impactful than we ever imagined.",
      rating: 5,
      initials: 'PO'
    },
    {
      name: 'David Kuol',
      title: 'Business Development Manager',
      organization: 'South Sudan Energy Consortium',
      relationship: 'Client',
      content: "Korenilo is the kind of legal advisor who brings out the best in every business deal. Under his guidance, we've navigated complex regulatory requirements while achieving our business objectives. He creates solutions that work for all parties involved.",
      rating: 5,
      initials: 'DK'
    },
    {
      name: 'Grace Nyak',
      title: 'Community Legal Aid Coordinator',
      organization: 'South Sudan Legal Aid Society',
      relationship: 'Pro Bono Partner',
      content: "Korenilo's dedication to pro bono work and community service is inspiring. He has helped countless individuals access justice and understand their legal rights. His vision for legal accessibility has changed how we approach community legal services.",
      rating: 5,
      initials: 'GN'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              What Colleagues Say
            </h2>
            <div className="w-24 h-1 bg-academic-gold mx-auto mb-8"></div>
            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Testimonials from academic peers, industry leaders, and legal professionals who have experienced firsthand the impact of dedicated legal service and business development expertise.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-academic-gold" />
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-grow mb-6">
                    <p className="text-text-secondary leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 fill-academic-gold text-academic-gold" 
                      />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-academic-gold/10 text-academic-gold font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <div className="font-semibold text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {testimonial.title}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {testimonial.organization}
                      </div>
                    </div>
                  </div>

                  {/* Relationship Badge */}
                  <div className="mt-4">
                    <Badge 
                      variant="secondary"
                      className="bg-primary/10 text-primary text-xs"
                    >
                      {testimonial.relationship}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-academic-gold/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-primary text-center mb-8">
                  Trusted by Leading Organizations
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-academic-gold mb-2">30+</div>
                    <div className="text-text-secondary">Professional References</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-academic-gold mb-2">10+</div>
                    <div className="text-text-secondary">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-academic-gold mb-2">500+</div>
                    <div className="text-text-secondary">Contracts Managed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-academic-gold mb-2">98%</div>
                    <div className="text-text-secondary">Client Satisfaction</div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-primary/10">
                  <p className="text-center text-text-secondary italic">
                    "Korenilo consistently demonstrates the rare combination of legal expertise, business acumen, and genuine care for clients that defines truly exceptional legal professionals."
                  </p>
                  <p className="text-center text-primary font-semibold mt-2">
                    - Consensus from Client Reviews
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;