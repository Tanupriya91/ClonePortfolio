function Hero() {
  return (
    <section className="hero">
      <span>Hey there! My name is</span>
      <span className="hero-content">Tanu Priya</span>
      <span>
        I develop web applications from end-to-end! <br></br> I also make games on the
        side.
      </span>
      <div className="logo">
        <img src="gitlogo.jpg" alt="" />
        <a
          href="https://github.com/Tanupriya91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hero-btn"> My GitHub</button>
        </a>
      </div>
    </section>
  );
}
export default Hero;
