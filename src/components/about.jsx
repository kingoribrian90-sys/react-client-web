import Testimonials from "./testimonials"

function About() {
  return (
    <section id="about" className="about">
      <h2>Years in business</h2>
      <p>14 years</p>

      <h2>location</h2>
      <p>Chinga, Othaya, Nyeri County, Kenya</p>
      <div style={{ width: "100%", maxWidth: 720, margin: "1rem auto", borderRadius: 18, overflow: "hidden", boxShadow: "var(--shadow)" }}>
        <iframe
          title="Chinga Othaya Nyeri location"
          src="https://www.google.com/maps?q=Chinga+Othaya+Nyeri+County&output=embed"
          width="100%"
          height="360"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="fast"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <h2>Credentials</h2>
      <p></p>
      <p></p>
      <p></p>

      <Testimonials />
      <h2>client logos</h2>
      <img src="" alt="" /><img src="" alt="" /><img src="" alt="" />
    </section>
  )
}

export default About