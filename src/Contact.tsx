import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto space-y-8">
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
            <form className="space-y-4" onSubmit={handleSubmit}>
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
              <Button type="submit" className="w-full" disabled={status === "sending"}>
                <Mail className="mr-2 h-4 w-4" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
              {status === "success" && <p className="text-green-600 text-center mt-2">Message sent!</p>}
              {status === "error" && <p className="text-red-600 text-center mt-2">Something went wrong. Please try again.</p>}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact; 