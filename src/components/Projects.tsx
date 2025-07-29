import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Lightbulb, Heart, Target, ExternalLink, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Oil and Gas Contract Management System',
      category: 'Legal Technology',
      icon: Lightbulb,
      period: '2022 - Present',
      status: 'Active',
      description: 'Developed comprehensive contract management system for petroleum operations, ensuring compliance with local content requirements and regulatory standards.',
      impact: {
        contracts: '500+',
        compliance: '98%',
        efficiency: '+40%',
        savings: '$2M+'
      },
      technologies: ['Contract Management Platform', 'Compliance Tracking', 'Legal Database'],
      role: 'Lead Legal Consultant',
      achievements: [
        'Designed contract templates for oil and gas operations',
        'Implemented compliance monitoring system for local content requirements',
        'Reduced contract processing time by 40%',
        'Achieved 98% compliance rate across all contracts'
      ]
    },
    {
      title: 'Legal Aid and Pro Bono Services',
      category: 'Community Service',
      icon: Users,
      period: '2020 - Present',
      status: 'Ongoing',
      description: 'Providing free legal services to underserved communities, focusing on employment law, property rights, and business development.',
      impact: {
        clients: '200+',
        cases: '150+',
        success: '85%',
        hours: '500+'
      },
      technologies: ['Case Management System', 'Document Automation', 'Client Portal'],
      role: 'Pro Bono Coordinator',
      achievements: [
        'Provided legal assistance to 200+ individuals and families',
        'Successfully resolved 150+ cases with 85% success rate',
        'Established mentorship program for junior lawyers',
        'Developed legal education workshops for community members'
      ]
    },
    {
      title: 'Business Development Advisory Program',
      category: 'Business Strategy',
      icon: Heart,
      period: '2019 - 2022',
      status: 'Completed',
      description: 'Comprehensive advisory program helping small and medium enterprises navigate legal requirements and develop sustainable business strategies.',
      impact: {
        businesses: '50+',
        growth: '+60%',
        jobs: '200+',
        compliance: '100%'
      },
      technologies: ['Business Planning Tools', 'Legal Compliance Platform', 'Financial Modeling'],
      role: 'Senior Business Advisor',
      achievements: [
        'Advised 50+ businesses on legal compliance and growth strategies',
        'Helped businesses achieve average 60% revenue growth',
        'Created 200+ new jobs across client companies',
        'Ensured 100% regulatory compliance for all clients'
      ]
    },
    {
      title: 'Arbitration and Dispute Resolution Center',
      category: 'Legal Services',
      icon: Target,
      period: '2021 - Present',
      status: 'Active',
      description: 'Specialized center providing alternative dispute resolution services for commercial and energy sector disputes.',
      impact: {
        cases: '75+',
        resolution: '92%',
        time: '-50%',
        satisfaction: '4.8/5'
      },
      technologies: ['Arbitration Platform', 'Case Management', 'Video Conferencing'],
      role: 'Arbitration Specialist',
      achievements: [
        'Resolved 75+ complex commercial disputes through arbitration',
        'Achieved 92% successful resolution rate',
        'Reduced average dispute resolution time by 50%',
        'Maintained 4.8/5 client satisfaction rating'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-6">
              Impact Projects
            </h2>
            <div className="w-24 h-1 bg-academic-gold mx-auto mb-8"></div>
            <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Transformative legal and business initiatives that bridge academic research with real-world applications, creating measurable impact across communities and organizations.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    
                    {/* Project Info */}
                    <div className="lg:col-span-2 p-8">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="bg-academic-gold/10 p-3 rounded-full">
                              <project.icon className="h-6 w-6 text-academic-gold" />
                            </div>
                            <div>
                              <CardTitle className="text-2xl font-serif text-primary mb-2">
                                {project.title}
                              </CardTitle>
                              <div className="flex gap-2 flex-wrap">
                                <Badge variant="secondary" className="bg-primary/10 text-primary">
                                  {project.category}
                                </Badge>
                                <Badge 
                                  variant="outline"
                                  className={`${
                                    project.status === 'Active' 
                                      ? 'border-green-500 text-green-700'
                                      : project.status === 'Ongoing'
                                      ? 'border-blue-500 text-blue-700'
                                      : 'border-gray-500 text-gray-700'
                                  }`}
                                >
                                  {project.status}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-text-secondary">
                            {project.period}
                          </div>
                        </div>
                      </CardHeader>

                      <p className="text-text-secondary leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-2">Role: {project.role}</h4>
                        <div className="text-sm text-text-secondary">
                          <strong>Key Technologies:</strong> {project.technologies.join(' • ')}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                              <div className="w-1.5 h-1.5 bg-academic-gold rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        variant="outline"
                        className="border-academic-gold text-academic-gold hover:bg-academic-gold hover:text-white transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    {/* Impact Metrics */}
                    <div className="bg-gradient-to-br from-primary/5 to-academic-gold/5 p-8 flex flex-col justify-center">
                      <h4 className="font-semibold text-primary mb-6 text-center">Project Impact</h4>
                      <div className="space-y-6">
                        {Object.entries(project.impact).map(([key, value], i) => (
                          <div key={i} className="text-center">
                            <div className="text-2xl font-bold text-academic-gold mb-1">
                              {value}
                            </div>
                            <div className="text-sm text-text-secondary capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Overall Impact Summary */}
          <Card className="mt-16 border-0 shadow-lg bg-gradient-to-r from-primary to-primary-accent text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif font-semibold mb-8">
                Collective Project Impact
              </h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold text-academic-gold mb-2">825+</div>
                  <div className="text-white/90">Cases Handled</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-academic-gold mb-2">$2M+</div>
                  <div className="text-white/90">Cost Savings</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-academic-gold mb-2">250+</div>
                  <div className="text-white/90">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-academic-gold mb-2">92%</div>
                  <div className="text-white/90">Success Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;