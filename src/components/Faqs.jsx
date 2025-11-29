import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, BookOpen } from 'lucide-react';
import FloatingIcon from './FloatingIcon';

const Faqs = () => {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Why is your trek fee higher than other trekking companies?",
      answer: "Our trek fees reflect the premium quality of experience we provide. We excel in three key areas:\n\n1. Safety: Indiahikes is India's safest trekking organisation.\n\n2. Mindfully Designed Trek: Professional outdoor facilitators create meaningful experiences.\n\n3. Premium Experience: Beautiful campsites, expedition-grade equipment, and sustainability practices.\n\nWith these benefits, our marginal fee difference represents exceptional value."
    },
    {
      id: 2,
      question: "Can I join your groups as a solo trekker?",
      answer: "Absolutely! Many solo trekkers join us and have wonderful experiences meeting like-minded people.\n\nOur pre-trek team ensures you know your entire group well before heading out. You'll e-meet team members, participate in briefings, and connect on WhatsApp groups."
    },
    {
      id: 3,
      question: "I'm a solo woman. Is it safe for me?",
      answer: "Absolutely safe. 35% of our trekkers are women with separate accommodation and 35% of trek leaders are women. Pre-trek e-meetings mean you're not meeting strangers, and male trek leaders are trained to handle all situations. It's completely safe!"
    },
    {
      id: 4,
      question: "Why do I have to register so much in advance?",
      answer: "Popular treks fill 5-6 months in advance because trekkers choose based on safety and reputation.\n\nWe recommend registering 5 months in advance for comfortable date choices, cancellation flexibility, and ample preparation time.\n\nPlan in advance for the best experience!"
    },
    {
      id: 5,
      question: "What are some easy treks for beginners?",
      answer: "70% of our trekkers are beginners and love trekking after their first trek!\n\nBest beginner treks:\n• Bijli Mahadev Trek\n• Nag Tibba Weekend Trek\n• Dayara Bugyal\n• Deoriatal-Chandrashila"
    },
    {
      id: 6,
      question: "I'm concerned about fitness requirements. Can I still trek?",
      answer: "Yes! Choose from our 'easy' treks first. Bijli Mahadev is excellent with completely flat trails.\n\nIf you work on fitness and meet trek-specific requirements, other treks are open to you. High-altitude trekking is a team sport where fitness matters for everyone's safety."
    },
    {
      id: 7,
      question: "Why are fitness approvals so strict?",
      answer: "High-altitude trekking is a team sport. When 18 trekkers climb together, every person's fitness matters.\n\nThe team is only as strong as its weakest member. Unfit trekkers slow teams, get injured easily, and may not complete the trek.\n\nOur philosophy: trekking and fitness go hand in hand."
    },
    {
      id: 8,
      question: "Do you have any group discounts?",
      answer: "Yes, we have waivers and scholarships:\n\n1. Children Scholarship: Ages 14 and below get 30% trek fee discount.\n\n2. Group Waiver: For every 10 adult members (15+), we waive the trek fee for one person."
    },
    {
      id: 9,
      question: "I have health issues. Can I trek?",
      answer: "It depends on severity. Please call us before registering for high-altitude treks.\n\nConsult your doctor about Himalayan trekking feasibility. We conduct a safety check-in on day one, so disclose any health issues to your trek leader for extra care."
    },
    {
      id: 10,
      question: "What are the toilet facilities like?",
      answer: "We use bio-toilets—researched and designed by Indiahikes for high altitudes.\n\nComfort: Toilet tents at distance from camp mean no sight or smell. Sawdust prevents odor.\n\nEnvironmental: Dry toilets without water ensure proper decomposition in fragile ecosystems.\n\nThey're genuinely comfortable and eco-friendly!"
    }
  ];

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-bg text-white relative overflow-hidden">
      {/* Premium background decorative elements - responsive sizing */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-[#0CE88C]/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-[#EFB71A]/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[600px] sm:h-[600px] bg-linear-to-r from-[#EFB71A]/2 via-transparent to-[#0CE88C]/2 rounded-full blur-3xl opacity-25" />
      <div className="absolute top-1/4 left-1/4 w-24 h-24 sm:w-48 sm:h-48 bg-[#0CE88C]/3 rounded-full blur-2xl opacity-40" />

      {/* Floating travel icons - hide on mobile */}
      <FloatingIcon icon={ChevronDown} className="hidden sm:block top-24 left-8" animationDelay={0} animationDuration={32} />
      <FloatingIcon icon={ChevronUp} className="hidden sm:block bottom-24 right-12" animationDelay={2} animationDuration={29} />
      <FloatingIcon icon={HelpCircle} className="hidden sm:block top-1/3 right-1/4" animationDelay={4} animationDuration={31} />
      <FloatingIcon icon={MessageCircle} className="hidden sm:block bottom-1/3 left-1/4" animationDelay={1.5} animationDuration={28} />
      <FloatingIcon icon={BookOpen} className="hidden sm:block top-1/2 left-1/2" animationDelay={3} animationDuration={33} />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header - responsive text and spacing */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-elms text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-linear-to-r from-[#EFB71A] to-[#0CE88C] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="font-elms text-base sm:text-lg text-gray-300 px-4">
            Everything you need to know about trekking with IndiaHikes
          </p>
          <div className="h-1 w-16 sm:w-24 bg-linear-to-r from-[#EFB71A] to-[#0CE88C] rounded-full mx-auto mt-3 sm:mt-4 opacity-60" />
        </div>

        {/* FAQ Accordion - responsive spacing */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="group relative bg-linear-to-br from-gray-900/50 to-gray-800/30 rounded-xl sm:rounded-2xl border border-gray-700/50 hover:border-[#EFB71A]/60 transition-all duration-300 overflow-hidden backdrop-blur-sm shadow-lg"
            >
              {/* Premium top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#EFB71A]/0 via-[#EFB71A] to-[#EFB71A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between hover:bg-[#EFB71A]/5 transition-colors duration-300 text-left"
              >
                <h3 className="font-elms font-bold text-base sm:text-lg text-white group-hover:text-[#EFB71A] transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                {openId === faq.id ? (
                  <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#EFB71A] transition-transform duration-300 shrink-0 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#EFB71A] transition-transform duration-300 shrink-0 flex-shrink-0" />
                )}
              </button>

              {/* Answer Container - responsive padding */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-t border-gray-700/30 bg-linear-to-b from-gray-900/0 to-gray-900/20">
                  <div className="space-y-3 sm:space-y-4">
                    {faq.answer.split('\n\n').map((paragraph, idx) => (
                      <div key={idx}>
                        {paragraph.includes('•') ? (
                          // Bullet point list - responsive text
                          <div className="space-y-2 sm:space-y-3">
                            {paragraph.split('\n').map((line, lineIdx) => (
                              line.trim() ? (
                                <div key={lineIdx} className="flex items-start gap-2 sm:gap-3 group/item">
                                  <span className="text-[#EFB71A] font-bold text-base sm:text-lg mt-0.5 shrink-0">
                                    {line.includes('•') ? '▸' : line.match(/^\d+\./) ? line.match(/^\d+\./)[0] : '✓'}
                                  </span>
                                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover/item:text-gray-200 transition-colors duration-300">
                                    {line.replace(/^[•\d.]\s*/, '')}
                                  </p>
                                </div>
                              ) : null
                            ))}
                          </div>
                        ) : (
                          // Regular paragraph - responsive text
                          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-elms group-hover:text-gray-200 transition-colors duration-300">
                            {paragraph}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom accent line - responsive */}
                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-700/20 flex items-center justify-between">
                    <div className="h-0.5 flex-1 bg-linear-to-r from-[#EFB71A]/30 to-transparent rounded-full" />
                    <span className="text-xs text-gray-500 px-2 sm:px-3 font-elms hidden sm:block">← Scroll to see more</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - responsive text */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <p className="text-gray-400 font-elms text-base sm:text-lg mb-4 sm:mb-6 px-4">
            Still have questions? <span className="text-[#EFB71A] font-semibold">Contact our coordinators</span>
          </p>
          <div className="h-1 w-16 sm:w-24 bg-linear-to-r from-[#0CE88C] to-[#EFB71A] rounded-full mx-auto opacity-60" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
