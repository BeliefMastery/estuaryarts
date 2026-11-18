import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
} from "@/lib/gallery-data";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section" aria-label="Contact">
      <div className="container-980">
        <div className="contact-card">
          <div className="contact-info">
            <h2 className="contact-heading">Contact</h2>
            <p className="contact-detail">{CONTACT_ADDRESS}</p>
            <p className="contact-detail">
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email-link">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p className="contact-detail">
              <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
            </p>
          </div>
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
