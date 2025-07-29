import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Linkedin, FileText, Calendar, Send, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  const { toast } = useToast();

  const inquiryTypes = [
    'Legal Consultation',
    'Contract Review',
    'Oil & Gas Law',
    'Business Development',
    'Research Collaboration',
    'Speaking Engagement',
    'Academic Inquiry',
    'Other'
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'korenilo2016@gmail.com',
      description: 'Primary contact for all professional inquiries'
    },
    {
      icon: Phone,
      title: 'Primary Phone',
      value: '+211(0)917089734',
      description: 'Direct line for urgent legal matters'
    },
    {
      icon: Phone,
      title: 'Secondary Phone',
      value: '+211926000232',
      description: 'Alternative contact number'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Juba, Central Equatoria',
      description: 'Available for local meetings and consultations'
    }
  ];

  const professionalProfiles = [
    {
      icon: Linkedin,
      title: 'LinkedIn Profile',
      description: 'Professional network and updates'
    },
    {
      icon: FileText,
      title: 'Legal Publications',
      description: 'Academic research and legal articles'
    },
    {
      icon: Calendar,
      title: 'Schedule Consultation',
      description: 'Book a legal consultation call'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInquiryTypeSelect = (type: string) => {
    setFormData({
      ...formData,
      inquiryType: type
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your inquiry. I will respond within 24-48 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: '',
      inquiryType: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl legal-serif font-bold text-lawyer-navy mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-lawyer-blue mx-auto mb-8"></div>
            <p className="text-xl text-text-secondary legal-serif leading-relaxed max-w-3xl mx-auto">
              I welcome opportunities to provide legal counsel, collaborate on research, and contribute to meaningful business and community initiatives. Whether you need expertise in oil and gas law, contract law, or business development, I'm here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg animate-slide-in">
                <CardHeader>
                  <CardTitle className="text-2xl legal-serif text-lawyer-navy">
                    Send a Message
                  </CardTitle>
                  <p className="text-text-secondary">
                    I personally review and respond to every inquiry. For urgent legal matters, please call directly.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Inquiry Type Selection */}
                    <div>
                      <label className="text-sm font-medium text-lawyer-navy mb-3 block">
                        Type of Inquiry
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTypes.map((type) => (
                          <Badge
                            key={type}
                            variant={formData.inquiryType === type ? "default" : "outline"}
                            className={`cursor-pointer transition-colors duration-300 ${
                              formData.inquiryType === type 
                                ? 'bg-lawyer-blue text-white hover:bg-lawyer-blue/90' 
                                : 'hover:bg-lawyer-blue/10 border-lawyer-blue/30'
                            }`}
                            onClick={() => handleInquiryTypeSelect(type)}
                          >
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Name and Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium text-lawyer-navy mb-2 block">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="border-lawyer-blue/20 focus:border-lawyer-blue"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-lawyer-navy mb-2 block">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="border-lawyer-blue/20 focus:border-lawyer-blue"
                          required
                        />
                      </div>
                    </div>

                    {/* Organization and Subject */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="organization" className="text-sm font-medium text-lawyer-navy mb-2 block">
                          Organization
                        </label>
                        <Input
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          placeholder="Your organization or company"
                          className="border-lawyer-blue/20 focus:border-lawyer-blue"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="text-sm font-medium text-lawyer-navy mb-2 block">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Brief subject line"
                          className="border-lawyer-blue/20 focus:border-lawyer-blue"
                          required
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-lawyer-navy mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your legal requirements, timeline, and any specific questions you have..."
                        rows={6}
                        className="border-lawyer-blue/20 focus:border-lawyer-blue"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-lawyer-blue hover:bg-lawyer-blue/90 text-white font-semibold transition-all duration-300"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Methods */}
              <Card className="border-0 shadow-lg animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-lawyer-navy">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-lawyer-blue/10 p-3 rounded-full">
                        <method.icon className="h-5 w-5 text-lawyer-blue" />
                      </div>
                      <div>
                        <div className="font-semibold text-lawyer-navy">
                          {method.title}
                        </div>
                        <div className="text-text-primary font-medium">
                          {method.value}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {method.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Professional Profiles */}
              <Card className="border-0 shadow-lg animate-slide-in">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-lawyer-navy">
                    Professional Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {professionalProfiles.map((profile, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start border-lawyer-blue/30 hover:bg-lawyer-blue/10 transition-colors duration-300"
                    >
                      <profile.icon className="mr-3 h-4 w-4 text-lawyer-blue" />
                      <div className="text-left">
                        <div className="font-medium">{profile.title}</div>
                        <div className="text-xs text-text-secondary">
                          {profile.description}
                        </div>
                      </div>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Response Time & Availability */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-lawyer-navy/5 to-lawyer-blue/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-lawyer-blue" />
                    <h4 className="font-semibold text-lawyer-navy">
                      Response Commitment
                    </h4>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    I personally read and respond to every message. You can expect a thoughtful reply within 24-48 hours, or sooner for urgent legal matters.
                  </p>
                  <div className="bg-lawyer-blue/10 p-3 rounded-lg">
                    <p className="text-xs text-lawyer-navy font-medium">
                      Available for consultations in Juba and virtual meetings worldwide.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Professional Quote */}
          <div className="mt-16 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-lawyer-navy/10 to-lawyer-blue/10">
              <CardContent className="p-8">
                <blockquote className="text-xl font-serif italic text-lawyer-navy mb-4">
                  "Justice delayed is justice denied."
                </blockquote>
                <p className="text-text-secondary">
                  Committed to providing timely, effective legal solutions that drive meaningful results for clients and communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;