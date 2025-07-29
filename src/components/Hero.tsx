import { Button } from '@/components/ui/button';
import { Download, Mail, Phone, MapPin, Scale, BookOpen, Award, Users } from 'lucide-react';
import profilePhoto from '@/assets/ajang.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Korenilo_Ajang_Duot_CV.pdf';
    link.download = 'Korenilo_Ajang_Duot_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const affiliations = [
    { name: "Dar Petroleum Operating Company", logo: null },
    { name: "University of Dar Es Salaam", logo: null },
    { name: "Spring & Co Advocates", logo: null },
    { name: "South Sudan Bar Association", logo: null },
    { name: "Kampala International University", logo: null }
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Main Hero Content */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Column - Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Greeting */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl legal-serif font-bold text-slate-800 leading-tight">
                  Hello There 👋
                  <br />
                  I'm <span className="text-lawyer-blue">Korenilo Ajang Duot</span>
                  <br />
                  a <span className="text-lawyer-navy">Legal Expert</span>
                </h1>
                
                <p className="text-xl text-slate-600 legal-serif leading-relaxed max-w-lg">
                  Hi, I'm Korenilo, a PhD candidate in Oil & Gas Law and Managing Partner from Juba. I help institutions navigate complex legal frameworks and regulatory compliance.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-lawyer-navy hover:bg-lawyer-navy/90 text-white legal-serif font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg rounded-xl shadow-elegant"
                >
                  Book a Consultation
                  <span className="ml-2 font-bold">→</span>
                </Button>
                
                <Button 
                  onClick={downloadCV}
                  variant="outline"
                  size="lg"
                  className="border-2 border-lawyer-blue text-lawyer-navy hover:bg-lawyer-blue/5 hover:border-lawyer-navy legal-serif font-semibold px-8 py-6 text-lg transition-all duration-300 rounded-xl shadow-card"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 pt-4 text-slate-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-lawyer-blue" />
                  <span className="legal-serif text-sm">Juba, South Sudan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-lawyer-blue" />
                  <span className="legal-serif text-sm">korenilo2016@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-lawyer-blue" />
                  <span className="legal-serif text-sm">+211917089734</span>
                </div>
              </div>
            </div>

            {/* Right Column - Portrait with Floating Elements */}
            <div className="relative flex justify-center lg:justify-end animate-slide-in">
              {/* Floating Legal Icons */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg animate-float z-10">
                <Scale className="w-8 h-8 text-lawyer-blue" />
              </div>
              
              <div className="absolute top-12 -right-4 w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center shadow-lg animate-float z-10" style={{ animationDelay: '0.5s' }}>
                <Award className="w-7 h-7 text-amber-600" />
              </div>
              
              <div className="absolute -bottom-4 -left-12 w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center shadow-lg animate-float z-10" style={{ animationDelay: '1s' }}>
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              
              <div className="absolute bottom-16 -right-8 w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center shadow-lg animate-float z-10" style={{ animationDelay: '1.5s' }}>
                <Users className="w-7 h-7 text-purple-600" />
              </div>

              {/* Main Portrait */}
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-elegant border-4 border-white">
                  <img
                    src={profilePhoto}
                    alt="Korenilo Ajang Duot - PhD Candidate in Oil & Gas Law"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Academic Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-lawyer-navy to-lawyer-blue text-white px-6 py-3 rounded-2xl legal-serif font-bold text-sm shadow-elegant">
                  PhD Candidate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Affiliations */}
      <div className="bg-white/80 backdrop-blur-sm border-t border-slate-200 py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-text-muted legal-serif font-bold text-sm uppercase tracking-wider mb-8">
              Professional <span className="text-lawyer-navy font-bold">Affiliations</span> With
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {affiliations.map((affiliation, index) => (
                <div key={index} className="text-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <div className="legal-serif text-sm text-slate-600 font-medium leading-tight">
                    {affiliation.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;