import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Scale, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Contract Specialist',
      company: 'Dar Petroleum Operating Company',
      department: 'Procurement Department - Contract Section',
      period: '11/2014 to Present',
      location: 'Juba, South Sudan',
      type: 'Oil & Gas - Contracts',
      icon: Building2,
      achievements: [
        'Evaluated and monitored contract performance to determine the need for contract amendments or extensions and compliance with contractual obligations',
        'Serving as an acquisition and contracting expert performing pre- and post-award contracting and analysis of complex problems in acquisition management and contracting solutions that afford maximum effectiveness in relation to cost or risk',
        'Performing reviews to determine and recommend to client the most effective course of action',
        'Conducting review processes to verify results were correct',
        'Researching contract files, preparing correspondence, and updating tracking database',
        'Liaising with Administrative contracting office, and Program office to determine status of various contracting actions',
        'Facilitating responses required to award contracts, orders, and agreements for IT equipment, software and maintenance services, employee training, security services, cell phones, interpreters, court reporters, surveillance equipment, and electrical projects',
        'Providing additional functional support on contracting and acquisition projects for commodities and services',
        'Monitoring the implementation of local content as required by law',
        'Leading/Participating in disputes and conflict resolution',
        'Participating/leading in Arbitration procedures'
      ],
      skills: ['Contract Management', 'Procurement', 'Compliance', 'Dispute Resolution', 'Arbitration', 'Local Content Implementation', 'Risk Assessment']
    },
    {
      role: 'Senior Partner and Managing Partner',
      company: 'Spring & Co Advocate',
      period: '01/2016 to Current',
      location: 'Juba, South Sudan',
      type: 'Legal Practice',
      icon: Scale,
      achievements: [
        'Reviewing documents for workers compensation and personal injury class actions suits',
        'Investigating complaints of retaliatory and discriminatory practices',
        'Presenting and summarizing cases to both judges and juries',
        'Filing appeals in High courts, Courts of Appeal and Supreme Court',
        'Conducting legal research and facts investigation for case litigation',
        'Advising clients of their rights in employment contracts',
        'Negotiating and drafting agreements relating to sale of properties',
        'Offering extensive case status explanations to each client',
        'Developing detailed litigation strategies for each case',
        'Drafting and amending complaints',
        'Advocating discovery documents such as form interrogatories',
        'Drafting all necessary motions relevant to each case',
        'Proposing and drafting standard witnesses instructions',
        'Appearing for status conferences and settlement conferences',
        'Strategically cross-examined witnesses in court',
        'Analyzing employer policies, procedures and work rules to verify full compliance',
        'Conducted audits on company policies',
        'Performed quarterly audits of client files',
        'Explained the legal process to each client and answered questions to help ease concerns',
        'Initiated dialogue between all parties involved in the case',
        'Oversaw firm day-to-day administrative operations, provided guidance to support staff',
        'Formulated trial techniques specifically pertaining to each case',
        'Analyzed law sources, including statutes, recorded judicial decisions, legal articles, constitutions, and legal codes',
        'Conducted client interviews and all client intake services',
        'Provided outstanding service to all individuals, promoting effective and lasting business relationships',
        'Interpreted laws, rulings and regulations for individuals and businesses',
        'Provided advice on land acquisition and real estate management',
        'Assisted clients in the application for bail, defense and investigation of criminal charges',
        'Advised clients on tax and other implications of commercial transactions, conducting due diligence investigations, advising on legal implications, and assisting with implementation of commercial transactions'
      ],
      skills: ['Litigation', 'Contract Law', 'Legal Research', 'Employment Law', 'Property Law', 'Criminal Defense', 'Commercial Law', 'Due Diligence', 'Court Representation']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl legal-serif font-bold text-lawyer-navy mb-6">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-lawyer-blue mx-auto mb-8"></div>
            <p className="text-xl text-text-secondary legal-serif leading-relaxed max-w-3xl mx-auto">
              A decade of distinguished service in contract law, legal practice, and business development across the oil and gas sector and legal advocacy.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-lawyer-blue/10 p-3 rounded-full">
                        <exp.icon className="h-6 w-6 text-lawyer-blue" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-serif text-lawyer-navy mb-2">
                          {exp.role}
                        </CardTitle>
                        <div className="text-lg font-semibold text-text-primary mb-1">
                          {exp.company}
                        </div>
                        {exp.department && (
                          <div className="text-md text-text-secondary mb-1">
                            {exp.department}
                          </div>
                        )}
                        <div className="flex items-center gap-4 text-text-secondary">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary"
                      className="bg-lawyer-navy/10 text-lawyer-navy hover:bg-lawyer-navy/20 self-start lg:self-center"
                    >
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid lg:grid-cols-4 gap-8">
                    
                    {/* Key Responsibilities */}
                    <div className="lg:col-span-3">
                      <h4 className="font-semibold text-lawyer-navy mb-4">Key Responsibilities:</h4>
                      <ul className="space-y-3">
                        {exp.achievements.slice(0, 8).map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-text-secondary">
                            <div className="w-2 h-2 bg-lawyer-blue rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {exp.achievements.length > 8 && (
                        <details className="mt-4">
                          <summary className="cursor-pointer text-lawyer-blue hover:text-lawyer-blue/80 font-medium text-sm">
                            View more responsibilities ({exp.achievements.length - 8} more)
                          </summary>
                          <ul className="space-y-3 mt-4">
                            {exp.achievements.slice(8).map((achievement, i) => (
                              <li key={i + 8} className="flex items-start gap-3 text-text-secondary">
                                <div className="w-2 h-2 bg-lawyer-blue rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </details>
                      )}
                    </div>
                    
                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-lawyer-navy mb-4">Core Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <Badge 
                            key={i}
                            variant="outline"
                            className="border-lawyer-blue/30 text-text-primary hover:bg-lawyer-blue/10 transition-colors duration-300 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Career Highlights */}
          <div className="mt-16 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-lawyer-navy/5 to-lawyer-blue/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-lawyer-navy mb-8">
                  Career Highlights
                </h3>
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-lawyer-blue mb-2">10+</div>
                    <div className="text-text-secondary">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-lawyer-blue mb-2">PhD</div>
                    <div className="text-text-secondary">Oil & Gas Laws</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-lawyer-blue mb-2">Senior</div>
                    <div className="text-text-secondary">Contract Specialist</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-lawyer-blue mb-2">Managing</div>
                    <div className="text-text-secondary">Partner</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;