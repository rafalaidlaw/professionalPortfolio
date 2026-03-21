import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold ubuntu-font" style={{ color: '#55575b' }}>Get In Touch</h2>
          <p className="text-muted-foreground">
            I'm always interested in new opportunities and exciting projects.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="ubuntu-font" style={{ color: '#55575b' }}>Send me a message</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'none' }}>
                <label>Don't fill this out if you're human: <input name="bot-field" onChange={handleChange} /></label>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" name="name" placeholder="Your name" required value={form.name} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" required value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" name="message" placeholder="Your message..." className="min-h-[120px]" required value={form.message} onChange={handleChange} />
              </div>
              <Button type="submit" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact; 