import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, BookOpen, Award, Calendar, MapPin, Trophy } from 'lucide-react';

const Research = () => {
  const academicJourney = [
    {
      year: '2022 - Present',
      degree: 'PhD in Law Candidate',
      field: 'Oil and Gas Laws',
      institution: 'Kampala International University',
      location: 'Kampala, Uganda',
      status: 'In Progress',
      icon: GraduationCap,
      color: 'lawyer-blue',
      description: 'Advanced research in oil and gas legal frameworks, focusing on regulatory compliance, contract law, and economic impact analysis in the African energy sector.'
    },
    {
      year: '2023',
      degree: 'Masters of Public Administration',
      field: 'Public Administration',
      institution: 'University of Juba',
      location: 'South Sudan',
      status: 'Completed',
      icon: Award,
      color: 'lawyer-navy',
      description: 'Comprehensive study of public policy, governance, and administrative processes in emerging economies.'
    },
    {
      year: '2022',
      degree: 'Post-Graduate Diploma',
      field: 'Public Administration',
      institution: 'University of Juba',
      location: 'Juba, South Sudan',
      status: 'Completed',
      icon: Trophy,
      color: 'lawyer-blue',
      description: 'Specialized training in public administration principles and practices.'
    },
    {
      year: '2021',
      degree: 'Master of Art',
      field: 'Security and Strategic Studies',
      institution: 'University of Juba',
      location: 'Juba, South Sudan',
      status: 'Completed',
      icon: Award,
      color: 'lawyer-navy',
      description: 'Advanced study of security frameworks, strategic planning, and policy analysis.'
    },
    {
      year: '2018',
      degree: 'Master of Laws',
      field: 'Law',
      institution: 'University of Dar Es Salaam',
      location: 'Dar es Salaam, Tanzania',
      status: 'Completed',
      icon: GraduationCap,
      color: 'lawyer-blue',
      description: 'Advanced legal studies with focus on East African legal systems and international law.'
    },
    {
      year: '2012',
      degree: 'Bachelor of Laws (Hon)',
      field: 'Law',
      institution: 'Dr. John Garang Memorial University of Science & Technology',
      location: 'Bor Town, South Sudan',
      status: 'Completed',
      icon: GraduationCap,
      color: 'lawyer-navy',
      description: 'Foundation in legal principles, constitutional law, and jurisprudence.'
    }
  ];

  const researchAreas = [
    {
      title: 'Oil and Gas Law',
      description: 'Legal frameworks governing energy sector operations in Africa',
      expertise: 'High'
    },
    {
      title: 'Contract Law',
      description: 'Commercial contracts, procurement, and transactional law',
      expertise: 'High'
    },
    {
      title: 'Business Development Law',
      description: 'Legal aspects of business strategy and commercial growth',
      expertise: 'High'
    },
    {
      title: 'Compliance and Risk Management',
      description: 'Regulatory compliance and legal risk assessment',
      expertise: 'High'
    },
    {
      title: 'Public Administration',
      description: 'Governance, public policy, and administrative law',
      expertise: 'Advanced'
    },
    {
      title: 'Security and Strategic Studies',
      description: 'Legal frameworks for security and strategic planning',
      expertise: 'Advanced'
    }
  ];

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl legal-serif font-bold text-lawyer-navy mb-6">
              Research & Education
            </h2>
            <div className="w-24 h-1 bg-lawyer-blue mx-auto mb-8"></div>
            <p className="text-xl text-text-secondary legal-serif leading-relaxed max-w-3xl mx-auto">
              A comprehensive academic journey spanning multiple disciplines, with specialized focus on oil and gas laws, public administration, and strategic studies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            
            {/* Academic Timeline */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-serif font-semibold text-lawyer-navy mb-8">
                Academic Timeline
              </h3>
              <div className="space-y-8">
                {academicJourney.map((item, index) => (
              <Card 
                key={index} 
                    className="border-0 shadow-md hover:shadow-lg transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`bg-${item.color}/10 p-3 rounded-full`}>
                          <item.icon className={`h-6 w-6 text-${item.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <div className="flex items-center gap-3">
                              <Badge 
                                variant={item.status === 'In Progress' ? 'default' : 'secondary'}
                                className={item.status === 'In Progress' 
                                  ? 'bg-lawyer-blue text-white' 
                                  : 'bg-lawyer-navy/10 text-lawyer-navy'
                                }
                              >
                                {item.status}
                              </Badge>
                              <div className="flex items-center gap-1 text-text-muted">
                                <Calendar className="h-4 w-4" />
                                <span className="text-sm">{item.year}</span>
                              </div>
                            </div>
                          </div>
                          
                          <h4 className="text-lg font-semibold text-lawyer-navy mb-1">
                            {item.degree}
                          </h4>
                          <p className="text-md font-medium text-text-primary mb-2">
                            {item.field}
                          </p>
                          
                          <div className="flex items-center gap-2 text-text-secondary mb-3">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{item.institution} • {item.location}</span>
                  </div>
                          
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                </CardContent>
              </Card>
            ))}
              </div>
          </div>

            {/* Research Areas */}
          <div>
              <h3 className="text-2xl font-serif font-semibold text-lawyer-navy mb-8">
                Research Areas
            </h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
            <div className="space-y-6">
                    {researchAreas.map((area, index) => (
                      <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-lawyer-navy text-sm">
                            {area.title}
                          </h4>
                          <Badge 
                            variant="outline"
                            className="border-lawyer-blue/30 text-lawyer-blue text-xs"
                          >
                            {area.expertise}
                          </Badge>
                        </div>
                        <p className="text-xs text-text-secondary leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Current Research */}
              <Card className="border-0 shadow-lg mt-8">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-5 w-5 text-lawyer-blue" />
                    <h4 className="font-semibold text-lawyer-navy">
                      Current Research Focus
                    </h4>
                      </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    My PhD research examines the intersection of oil and gas laws with economic development in emerging African economies, focusing on regulatory frameworks, contract optimization, and sustainable resource management.
                  </p>
                  <div className="bg-lawyer-blue/5 p-4 rounded-lg">
                    <p className="text-xs text-text-muted italic">
                      "Advancing legal frameworks that bridge energy sector development with sustainable economic growth in Sub-Saharan Africa."
                    </p>
                    </div>
                  </CardContent>
                </Card>
            </div>
          </div>

          {/* Academic Stats */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-lawyer-navy/5 to-lawyer-blue/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-lawyer-navy text-center mb-8">
                Academic Achievements
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-lawyer-blue mb-2">6</div>
                  <div className="text-text-secondary text-sm">Academic Degrees</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-lawyer-blue mb-2">4</div>
                  <div className="text-text-secondary text-sm">Universities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-lawyer-blue mb-2">3</div>
                  <div className="text-text-secondary text-sm">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-lawyer-blue mb-2">PhD</div>
                  <div className="text-text-secondary text-sm">In Progress</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Research;