import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Award, 
  Heart, 
  Search, 
  Lightbulb, 
  Scale, 
  FileText,
  Target,
  Handshake,
  PenTool,
  Calendar
} from 'lucide-react';

const About = () => {
  const coreSkills = [
    {
      icon: Search,
      title: 'Case Analysis',
      description: 'Strong investigative abilities and efficient researcher'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Developing comprehensive legal and business strategies'
    },
    {
      icon: Handshake,
      title: 'Conflict Resolution',
      description: 'Expert in dispute resolution and mediation'
    },
    {
      icon: Scale,
      title: 'Settlement Negotiation',
      description: 'Excellent track record in settlement negotiations'
    },
    {
      icon: BookOpen,
      title: 'Legal Writing',
      description: 'Professional legal documentation and correspondence'
    },
    {
      icon: FileText,
      title: 'Document Filing',
      description: 'Systematic approach to legal document management'
    },
    {
      icon: Users,
      title: 'Good Listening Skills',
      description: 'Client-focused communication and understanding'
    },
    {
      icon: PenTool,
      title: 'Clerical Excellence',
      description: 'Attention to detail in all administrative tasks'
    }
  ];

  const education = [
    {
      degree: 'PhD in Law Candidate',
      field: 'Oil and Gas Laws',
      institution: 'Kampala International University',
      location: 'Kampala, Uganda',
      year: '2022',
      status: 'In Progress'
    },
    {
      degree: 'Masters of Public Administration',
      field: 'Public Administration',
      institution: 'University of Juba',
      location: 'South Sudan',
      year: '2023',
      status: 'Completed'
    },
    {
      degree: 'Post-Graduate Diploma',
      field: 'Public Administration',
      institution: 'University of Juba',
      location: 'Juba, South Sudan',
      year: '2022',
      status: 'Completed'
    },
    {
      degree: 'Master of Art',
      field: 'Security and Strategic Studies',
      institution: 'University of Juba',
      location: 'Juba, South Sudan',
      year: '2021',
      status: 'Completed'
    },
    {
      degree: 'Master of Laws',
      field: 'Law',
      institution: 'University of Dar Es Salaam',
      location: 'Dar es Salaam, Tanzania',
      year: '2018',
      status: 'Completed'
    },
    {
      degree: 'Bachelor of Laws (Hon)',
      field: 'Law',
      institution: 'Dr. John Garang Memorial University of Science & Technology',
      location: 'Bor Town, South Sudan',
      year: '2012',
      status: 'Completed'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl legal-serif font-bold text-lawyer-navy mb-6">
              About Korenilo
            </h2>
            <div className="w-24 h-1 bg-lawyer-blue mx-auto mb-8"></div>
            <p className="text-xl text-text-secondary legal-serif leading-relaxed max-w-3xl mx-auto">
              A distinguished legal professional with expertise spanning oil and gas laws, contract law, and business development, backed by extensive academic credentials and practical experience.
            </p>
          </div>

          {/* Professional Summary */}
          <Card className="mb-12 border-0 shadow-lg animate-slide-in">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed mb-6 text-text-primary">
                  Confident, results driven Lawyer with experience in litigation, contract and transactional law who brings not only a legal background in oil and Gas laws, but a solid educational and employment history involving matters related to business development, management, compliance, marketing, and sales.
                </p>
                
                <p className="text-lg leading-relaxed mb-6 text-text-secondary">
                  As a <strong>PhD candidate in Oil and Gas Laws</strong> at Kampala International University and <strong>Senior Contract Specialist</strong> at Dar Petroleum Operating Company, I have dedicated my career to the intersection of legal expertise and business development. My journey combines rigorous academic research with practical application in one of Africa's most dynamic energy sectors.
                </p>
                
                <p className="text-lg leading-relaxed text-text-secondary">
                  Currently serving as <strong>Senior Partner and Managing Partner</strong> at Spring & Co Advocate, I handle complex litigation, contract negotiations, and transactional law matters. My expertise spans procurement management, compliance oversight, and strategic business solutions, consistently delivering results while maintaining unwavering commitment to legal excellence and ethical practice.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Core Skills */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-semibold text-lawyer-navy text-center mb-12">
              Core Skills & Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {coreSkills.map((skill, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-lawyer-blue/10 p-3 rounded-full">
                        <skill.icon className="h-6 w-6 text-lawyer-blue" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-lawyer-navy mb-2">
                          {skill.title}
                        </h4>
                        <p className="text-text-secondary leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl legal-serif font-semibold text-lawyer-navy text-center mb-12">
                Academic Background
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="bg-lawyer-blue/10 p-3 rounded-full">
                        <Calendar className="h-6 w-6 text-lawyer-blue" />
                      </div>
                      <div className="text-lawyer-navy font-bold text-lg min-w-[80px]">
                        {edu.year}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-2">
                        <h4 className="text-xl font-semibold text-lawyer-navy">
                          {edu.degree}
                        </h4>
                  <Badge 
                          variant={edu.status === 'In Progress' ? 'default' : 'secondary'}
                          className={edu.status === 'In Progress' 
                            ? 'bg-lawyer-blue text-white' 
                            : 'bg-lawyer-navy/10 text-lawyer-navy'
                          }
                        >
                          {edu.status}
                  </Badge>
                      </div>
                      <p className="text-lg font-medium text-text-primary mb-1">
                        {edu.field}
                      </p>
                      <p className="text-text-secondary">
                        {edu.institution} · {edu.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;