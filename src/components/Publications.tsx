import { ExternalLink, FileText } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "Legal Frameworks for Oil & Gas Contracts in East Africa",
      journal: "African Journal of Energy Law",
      year: "2023",
      type: "Journal Article",
      description: "Comprehensive analysis of regulatory frameworks governing petroleum contracts across East African jurisdictions, with special focus on South Sudan's emerging legal landscape.",
      pdfLink: "#"
    },
    {
      title: "The Role of Legal Compliance in Oil Sector Transparency",
      journal: "East African Law Review",
      year: "2022",
      type: "Research Paper",
      description: "Examining the intersection of legal compliance mechanisms and transparency requirements in petroleum sector governance.",
      pdfLink: "#"
    },
    {
      title: "Land Rights, Customary Law, and Commercial Acquisition",
      journal: "Journal of Legal Studies in Africa",
      year: "2023",
      type: "Academic Article",
      description: "Analysis of the complex relationship between traditional land tenure systems and modern commercial acquisition practices in post-conflict South Sudan.",
      pdfLink: "#"
    },
    {
      title: "Conflict Resolution Mechanisms in Energy Contract Disputes",
      journal: "SSDN Legal Bulletin",
      year: "2024",
      type: "Policy Brief",
      description: "Practical approaches to resolving contractual disputes in the energy sector through alternative dispute resolution mechanisms.",
      pdfLink: "#"
    },
    {
      title: "Institutional Integrity in Natural Resource Management",
      journal: "East Africa Legal Quarterly",
      year: "2023",
      type: "Review Article",
      description: "Exploring the role of legal institutions in ensuring transparent and accountable natural resource governance in developing economies.",
      pdfLink: "#"
    },
    {
      title: "Contract Law and Procurement in the Public Sector",
      journal: "African Public Administration Review",
      year: "2022",
      type: "Research Paper",
      description: "Examining best practices in public sector procurement and contract management with focus on compliance and performance monitoring.",
      pdfLink: "#"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl lg:text-5xl legal-serif font-bold text-lawyer-navy mb-6">
              Selected Research & Legal Publications
            </h2>
            <p className="text-xl text-text-secondary legal-serif max-w-3xl mx-auto leading-relaxed">
              Academic contributions to legal scholarship in oil and gas law, contract law, and institutional governance across East Africa.
            </p>
          </div>

          {/* Publications Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {publications.map((publication, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 p-8 border border-gray-100 hover:border-lawyer-blue/20"
              >
                {/* Publication Type Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-lawyer-blue/10 text-lawyer-blue legal-serif text-sm font-semibold rounded-full mb-4">
                  <FileText className="w-4 h-4 mr-1" />
                  {publication.type}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl legal-serif font-bold text-lawyer-navy mb-3 leading-tight">
                  {publication.title}
                </h3>

                {/* Journal and Year */}
                <div className="flex items-center justify-between mb-4 text-text-secondary">
                  <span className="academic-italic legal-serif text-lg">
                    {publication.journal}
                  </span>
                  <span className="legal-serif font-semibold text-lawyer-blue">
                    {publication.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-text-secondary legal-serif leading-relaxed mb-6">
                  {publication.description}
                </p>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a 
                    href={publication.pdfLink}
                    className="inline-flex items-center text-lawyer-blue hover:text-lawyer-navy legal-serif font-semibold transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Publication
                  </a>
                  
                  <button className="text-text-muted hover:text-text-secondary legal-serif text-sm transition-colors duration-200">
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-lg shadow-card p-8 border border-gray-100 max-w-3xl mx-auto">
              <h3 className="text-2xl legal-serif font-bold text-lawyer-navy mb-4">
                Research Collaboration & Academic Partnerships
              </h3>
              <p className="text-text-secondary legal-serif leading-relaxed mb-6">
                Interested in collaborative research opportunities, peer review, or academic partnerships in oil and gas law, contract law, or institutional governance? I welcome scholarly engagement and cross-institutional collaboration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-lawyer-blue hover:bg-lawyer-blue/90 text-white legal-serif font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Discuss Research Collaboration
                </a>
                <a 
                  href="mailto:korenilo2016@gmail.com"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-lawyer-navy text-lawyer-navy hover:bg-lawyer-navy hover:text-white legal-serif font-semibold rounded-lg transition-all duration-300"
                >
                  Request Academic CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications; 