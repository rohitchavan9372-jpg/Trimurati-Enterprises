"use client";

import { useState } from "react";

const serviceOptions = [
  {
    label: "Infrastructure Services",
    options: [
      { value: "hard-rock-control-blasting", text: "Hard Rock Control Blasting" },
      { value: "hard-rock-diamond-saw-cutting", text: "Hard Rock Diamond Saw Cutting" },
      { value: "chemical-hard-rock-cracking", text: "Chemical Hard Rock Cracking" },
      { value: "manual-hard-rock-breaking", text: "Manual Hard Rock Breaking" },
      { value: "splitter-rock-cracking", text: "Splitter Rock Cracking" },
      { value: "steel-fabric-wiremesh-fixing", text: "Fixing of Steel Fabric / Wiremesh" },
      { value: "all-diameter-rockbolts", text: "All Diameter Rockbolts" },
      { value: "shotcrete", text: "Shotcrete" }
    ]
  },
  {
    label: "Trimurti Stone Crusher",
    options: [
      { value: "stone-crusher-20-mm", text: "Trimurti Stone Crusher -> 20 mm Aggregate" },
      { value: "stone-crusher-m-sand", text: "Trimurti Stone Crusher -> M.Sand" },
      { value: "stone-crusher-plaster-sand", text: "Trimurti Stone Crusher -> Plaster Sand" }
    ]
  },
  {
    label: "Trimurti Transport",
    options: [
      { value: "transport-rubble", text: "Trimurti Transport -> Rubble Transport" },
      { value: "transport-metal-10-20", text: "Trimurti Transport -> Metal 10/20 Transport" },
      { value: "transport-m-sand", text: "Trimurti Transport -> M.Sand Transport" },
      { value: "transport-plaster-sand", text: "Trimurti Transport -> Plaster Sand Transport" }
    ]
  }
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: ""
};

export default function ContactEnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setStatus({
          type: "error",
          message: result.error || "Unable to send enquiry right now. Please try again."
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Enquiry sent successfully. Our team will contact you soon."
      });
      setForm(initialForm);
    } catch {
      setStatus({
        type: "error",
        message: "Unable to send enquiry right now. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article className="service-card">
      <h2 className="headline" style={{ fontSize: "2.5rem" }}>Send an Enquiry</h2>
      <form className="contact-form" style={{ marginTop: "2rem" }} onSubmit={onSubmit}>
        <div className="contact-form__row">
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
              value={form.name}
              onChange={updateField("name")}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 000 000 0000"
              autoComplete="tel"
              inputMode="tel"
              value={form.phone}
              onChange={updateField("phone")}
              required
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@enterprise.com"
            autoComplete="email"
            value={form.email}
            onChange={updateField("email")}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="service">Service Interest</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={updateField("service")}
            required
          >
            <option value="" disabled>Select a Service</option>
            {serviceOptions.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((option) => (
                  <option key={option.value} value={option.text}>{option.text}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell us about your project requirements..."
            autoComplete="off"
            value={form.message}
            onChange={updateField("message")}
            required
          />
        </div>

        {status.message ? (
          <p style={{ margin: 0, color: status.type === "error" ? "#b91c1c" : "#166534" }}>
            {status.message}
          </p>
        ) : null}

        <button type="submit" className="button" style={{ width: "100%", marginTop: ".5rem" }} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit Enquiry"}
        </button>
      </form>
    </article>
  );
}
