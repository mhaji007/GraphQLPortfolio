import FadeIn from 'react-fade-in';

const Hero = () => {

return (
  <section className="fj-hero">
  <div className="fj-hero-wrapper row">
    <div className="hero-left col-md-6">
      <h1 className="white hero-title">Hey, I'm Mehdi. A web developer</h1>
      <h2 className="white hero-subtitle">Join me on my journey </h2>
      <div className="button-container">
        <a href="" className="btn btn-main bg-blue ttu">See my work</a>
      </div>
    </div>
    <div className="hero-right col-md-6">
      <div className="hero-image-container">
        <a className="grow hero-link">
          <img
            className="hero-image"
            src="home3.jpg"></img>
        </a>
      </div>
    </div>
  </div>
</section>
)

}

export default Hero;








