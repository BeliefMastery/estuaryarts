"use client";

import { useState, type FormEvent } from "react";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
} from "@/lib/gallery-data";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }

    setErrorMsg("");
    setSubmitted(true);

    const mailSubject = encodeURIComponent(subject.trim() || `Enquiry from ${name.trim()}`);
    const bodyLines = [
      `Name: ${name.trim()}`,
      address.trim() ? `Address: ${address.trim()}` : null,
      `Email: ${email.trim()}`,
      phone.trim() ? `Phone: ${phone.trim()}` : null,
      "",
      message.trim(),
    ]
      .filter((line): line is string => line !== null)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${encodeURIComponent(bodyLines)}`;
  };

  return (
    <section id="contact" className="contact-section" aria-label="Contact">
      <div className="container-980">
        <div className="contact-card">
          <div className="contact-info">
            <h2 className="contact-heading">Contact</h2>
            <p className="contact-detail">{CONTACT_ADDRESS}</p>
            <p className="contact-detail">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
            <p className="contact-detail">
              <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`form-input${errorMsg && !name.trim() ? " input-error" : ""}`}
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              aria-label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-input"
            />

            <div className="contact-form-row">
              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`form-input${errorMsg && !email.trim() ? " input-error" : ""}`}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                aria-label="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-input"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              aria-label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="form-input"
            />

            <textarea
              name="message"
              placeholder="Type your message here..."
              aria-label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`form-textarea${errorMsg && !message.trim() ? " input-error" : ""}`}
            />

            <div className="form-submit-row">
              {errorMsg && <span className="form-status error">{errorMsg}</span>}
              {submitted && !errorMsg && (
                <span className="form-status">
                  Opening your email client to send to {CONTACT_EMAIL}
                </span>
              )}
              <button type="submit" className="form-submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="map-wrapper">
          <iframe
            title="Estuary Arts, Parapara, Tasman 7182 Map"
            className="map-iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Estuary+Arts,+Parapara,+Tasman+7182,+New+Zealand&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </div>
      </div>
    </section>
  );
}
