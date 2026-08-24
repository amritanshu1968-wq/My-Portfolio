import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Copy, Check, Send } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xgawjeav", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback to mailto if API fails
        const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
          `Portfolio Inquiry from ${formData.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;
        setSubmitted(true);
      }
    } catch (error) {
      const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
        `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Direct Communication</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">Get In Touch</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
            I am currently open to entry-level Data Analyst, BI Developer, Business Analyst, and Frontend Developer roles or internships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-5">
              
              <h3 className="text-lg font-bold text-slate-100">Contact Channels</h3>

              {/* Email Card with Copy Button */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Email Address</div>
                    <a 
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-blue-400 transition truncate max-w-[200px] block"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Phone / WhatsApp</div>
                  <a 
                    href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 transition"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-600/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white transition font-medium"
                >
                  <Github size={16} />
                  <span>GitHub Profile</span>
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition font-medium"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>
              </div>

              {/* Download Resume Button */}
              <a
                href={portfolioData.personal.resumeUrl}
                download="Amritanshu_Shukla_Resume.pdf"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition shadow-md"
              >
                <Download size={15} />
                <span>Download Official Resume PDF</span>
              </a>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8">
              
              <h3 className="text-lg font-bold text-slate-100 mb-1">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below to get in touch directly regarding hiring or project discussions.
              </p>

              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-6 rounded-xl text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check size={20} />
                  </div>
                  <div className="font-bold text-sm">Thank You for Reaching Out!</div>
                  <p className="text-xs text-slate-300">
                    Your message has been logged. I will respond to your email shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5 text-xs">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5 text-xs">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@company.com"
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1.5 text-xs">Message / Inquiry</label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss an opening, project opportunity, or general inquiry..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500 transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 disabled:opacity-75 text-white font-semibold text-xs sm:text-sm py-3 rounded-lg flex items-center justify-center gap-2 transition"
                  >
                    <Send size={15} className={loading ? "animate-pulse" : ""} />
                    <span>{loading ? "Sending Message..." : "Send Direct Message"}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
