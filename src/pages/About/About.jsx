const About = () => {
  return (
    <div>
      <div className="h-full bg-1 w-full text-2 px-4 py-60">
        <div className="max-w-5xl mx-auto flex justify-center items-center flex-col gap-6">
          <div>
            <h3 className="font-fraunces font-semibold text-4xl uppercase">
              @Joy Design Studio
            </h3>
          </div>
          <div>
            <p className="font-inter text-center text-2xl font-light uppercase">
              We believe good interior design doesn't end with a drawing. We
              work closely with the realities of a project understanding
              materials, working with craftsmen, being present on site, and
              making sure the final space reflects the thought that went into
              its design.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-2 h-full w-full px-4 flex justify-center items-center flex-col py-36">
        <div className="w-3xl h-full relative flex justify-center items-center flex-col">
          <div className="absolute right-0 top-0">
            <h4 className="font-fraunces text-3xl">The Founder</h4>
          </div>
          <div className="h-120 w-90 object-cover overflow-hidden">
            <img src="/public/Founder.jpg" alt="" />
          </div>
          <div className="absolute left-0 top-20">
            <h3 className="font-fraunces text-5xl uppercase">Khushi</h3>
          </div>
          <div className="absolute right-0 bottom-0">
            <h3 className="font-fraunces text-6xl uppercase">Gupta</h3>
          </div>
        </div>
        <div>
          <p className="font-inter text-center w-3xl text-lg text-pretty py-6">
            Hi, I’m Khushi Gupta, an Interior Designer with a passion for
            creating spaces that feel beautiful and meaningful. With a
            background in interior design from L.S. Raheja School of
            Architecture and experience across residential and commercial
            projects, I believe in creating spaces that balance aesthetics,
            functionality, and the personality of the people who use them. For
            me, every space is an opportunity to bring a little more joy into
            everyday living.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
