/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, SyntheticEvent } from 'react';
import { motion } from 'motion/react';

export default function ContactMap() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Modular Switches & Boards');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prefills, structures, and triggers the WhatsApp message
  const handleSubmission = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    setIsSubmitting(true);

    const boldHeader = `Hello Vinayaka Electrical Palace, I'm visiting your website and have an inquiry. Here are my details:`;
    const body = `${boldHeader}\n\n` +
                 `👤 *Customer Name:* ${name.trim()}\n` +
                 `📞 *Phone / Contact:* ${phone.trim()}\n` +
                 `🏷️ *Product / Brand Interest:* ${category}\n\n` +
                 `💬 *Requirement Details:*\n${message.trim()}`;

    const storeNumber = '917411279019';
    const finalUrl = `https://wa.me/${storeNumber}?text=${encodeURIComponent(body)}`;

    setTimeout(() => {
      window.open(finalUrl, '_blank');
      setName('');
      setPhone('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-16 md:py-24 bg-[var(--bg-main)]" id="contact">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--primary-color)] font-['Outfit'] font-semibold text-[0.9rem] uppercase tracking-[0.15em] block mb-3">Get In Touch</span>
          <h2 className="text-[2.25rem] sm:text-[2.5rem] font-bold font-['Outfit'] tracking-tight mb-4 text-[var(--text-primary)]">
            Locate & Contact Us
          </h2>
          <div className="w-[60px] h-[3px] bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-gold)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch">
          {/* Form and info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[var(--radius-md)] border border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-md p-8 sm:p-12 shadow-lg"
          >
            <h3 className="text-[1.8rem] font-bold text-[var(--accent-gold)] font-['Outfit'] mb-3">Connect Instantly</h3>
            <p className="text-[var(--text-secondary)] mb-8 text-[0.95rem]">
              Have an inquiry or want a custom quotation? Fill out our form below, and we will automatically format a direct WhatsApp inquiry for you!
            </p>

            <form className="mb-10 flex flex-col gap-5" onSubmit={handleSubmission}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-['Outfit'] font-bold text-[0.85rem] uppercase tracking-wider text-[var(--text-secondary)]" htmlFor="clientName">Name</label>
                  <input
                    type="text"
                    id="clientName"
                    required
                    placeholder="Your Name"
                    className="bg-[var(--bg-main)] border border-[var(--border-color)] rounded-[var(--radius-sm)] px-4 py-3 text-[var(--text-primary)] font-['Inter'] text-[0.95rem] outline-none transition-all focus:border-[var(--primary-color)] focus:bg-[var(--bg-card)] focus:shadow-[0_0_8px_var(--primary-glow)]"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Outfit'] font-bold text-[0.85rem] uppercase tracking-wider text-[var(--text-secondary)]" htmlFor="clientPhone">Phone Number</label>
                  <input
                    type="tel"
                    id="clientPhone"
                    required
                    placeholder="Mobile Number"
                    className="bg-[var(--bg-main)] border border-[var(--border-color)] rounded-[var(--radius-sm)] px-4 py-3 text-[var(--text-primary)] font-['Inter'] text-[0.95rem] outline-none transition-all focus:border-[var(--primary-color)] focus:bg-[var(--bg-card)] focus:shadow-[0_0_8px_var(--primary-glow)]"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Outfit'] font-bold text-[0.85rem] uppercase tracking-wider text-[var(--text-secondary)]" htmlFor="interestCategory">Product Interest</label>
                <select
                  id="interestCategory"
                  className="bg-[var(--bg-main)] border border-[var(--border-color)] rounded-[var(--radius-sm)] px-4 py-3 text-[var(--text-primary)] font-['Inter'] text-[0.95rem] cursor-pointer outline-none transition-all focus:border-[var(--primary-color)] focus:bg-[var(--bg-card)] focus:shadow-[0_0_8px_var(--primary-glow)] appearance-none"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2394a3b8\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                    backgroundSize: '16px',
                    paddingRight: '40px'
                  }}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Modular Switches & Boards">Modular Switches & Accessories</option>
                  <option value="Wires & Cables">Wires & Cables</option>
                  <option value="LED Decorative Lights">LED & Decorative Lighting</option>
                  <option value="Fans & Appliances">Fans & Electrical Appliances</option>
                  <option value="MCBs & Safety Products">Safety Switches & DB Boxes</option>
                  <option value="Other Wholesale Inquiries">Other / Wholesale Bulk Sourcing</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-['Outfit'] font-bold text-[0.85rem] uppercase tracking-wider text-[var(--text-secondary)]" htmlFor="messageBody">Inquiry Message</label>
                <textarea
                  id="messageBody"
                  required
                  rows={4}
                  placeholder="Describe your requirement (e.g., brand preferences, quantity)..."
                  className="bg-[var(--bg-main)] border border-[var(--border-color)] rounded-[var(--radius-sm)] px-4 py-3 text-[var(--text-primary)] font-['Inter'] text-[0.95rem] outline-none transition-all focus:border-[var(--primary-color)] focus:bg-[var(--bg-card)] focus:shadow-[0_0_8px_var(--primary-glow)] resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[var(--primary-color)] text-white py-3.5 mt-2 rounded-[var(--radius-sm)] font-['Outfit'] font-semibold text-[1rem] flex items-center justify-center gap-2.5 hover:bg-[var(--primary-hover)] transition-all cursor-pointer select-none outline-none shadow-md shadow-blue-500/10"
              >
                <i className={`fa-solid ${isSubmitting ? 'fa-circle-notch animate-spin' : 'fa-brands fa-whatsapp text-lg'}`}></i>
                <span>{isSubmitting ? 'Formatting Message...' : 'Send WhatsApp Inquiry'}</span>
              </button>
            </form>

            <div className="flex flex-col gap-6 pt-8 border-t border-[var(--border-color)]">
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-location-dot text-[var(--accent-gold)] text-xl mt-1"></i>
                <div>
                  <h5 className="font-[font-heading] font-semibold text-[0.95rem] uppercase tracking-wider text-[var(--text-primary)] mb-1">Store Address</h5>
                  <p className="text-[var(--text-secondary)] text-[0.95rem]">
                    Ground Floor, No 45-46, BVK Iyengar Rd, opp. Ram Mandir Road, Huriopet, Chickpet, Bengaluru, Karnataka 560053
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-phone text-[var(--accent-gold)] text-xl mt-1"></i>
                <div>
                  <h5 className="font-[font-heading] font-semibold text-[0.95rem] uppercase tracking-wider text-[var(--text-primary)] mb-1">Phone / Mobile</h5>
                  <p className="text-[var(--text-secondary)] text-[0.95rem]">+91 74112 79019</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa-solid fa-clock text-[var(--accent-gold)] text-xl mt-1"></i>
                <div>
                  <h5 className="font-[font-heading] font-semibold text-[0.95rem] uppercase tracking-wider text-[var(--text-primary)] mb-1">Business Hours</h5>
                  <p className="text-[var(--text-secondary)] text-[0.95rem]">Mon - Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Maps container */}
          <div className="rounded-[var(--radius-lg)] overflow-hidden relative border border-[var(--border-color)] h-[320px] lg:h-auto min-h-[320px] lg:min-h-full">
            <div className="absolute top-5 left-5 z-10">
              <a
                href="https://maps.app.goo.gl/HMrNbzZKKAtpXwQk8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[var(--bg-card)] hover:bg-[var(--accent-gold)] hover:text-black border border-[var(--border-color)] rounded-[var(--radius-sm)] text-[var(--text-primary)] duration-200"
              >
                <i className="fa-solid fa-location-arrow"></i>
                <span>Open in Google Maps App</span>
              </a>
            </div>

            {/* Embedded maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9620573981273!2d77.5735112!3d12.9741639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1797bf84a767%3A0xe58146805a982620!2sVinayak+Electrical+Palace+-+Chickpet!5e0!3m2!1sen!2sin!4v1716800000000!5m2!1sen!2sin"
              className="w-full h-full border-none absolute top-0 left-0 dark-map-invert transition-all duration-300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vinayak Electrical Palace Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
