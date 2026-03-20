'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Have questions? We'd love to hear from you
            </p>
            <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-lg">Email</h3>
              <a
                href="mailto:shoppoonyraluxe@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                shoppoonyraluxe@gmail.com
              </a>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground text-lg">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
                
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-muted/30 p-8 rounded-2xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
            >
              Send Message
            </button>

            {submitted && (
              <div className="bg-accent/20 border border-accent rounded-lg p-4 text-center">
                <p className="text-accent-foreground font-medium">
                  Thank you! We'll get back to you soon.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
