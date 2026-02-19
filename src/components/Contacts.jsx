function Contacts() {
  return (
    <section id="contacts" className="contacts">
      <h2>Say Hi </h2>
      <p>
        Want to collab on a project?<br />
        Feel free to send an email my way!<br />
        Or reach out to me here:
      </p>

      <div className="contact-links">
        <a href="mailto:tanupriya2024@gmail.com" className="contact-btn">
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/feed/?trk=sem-ga_campid.14650114788_asid.150089839322_crid.656569072780_kw.https%20www%20linkedin%20com_d.c_tid.kwd-37287296176_n.g_mt.e_geo.9193334"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Tanupriya91"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contacts;