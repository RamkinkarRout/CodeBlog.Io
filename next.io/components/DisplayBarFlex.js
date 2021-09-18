export default function DisplayBarFlex() {
  return (
    <div>
      <div className="p-4 my-5 max-w-[1360px] items-center mx-auto flex flex-col space-y-6">
        <h1 className="text-2xl text-center leading-relaxed tracking-wider font-semibold text-gray-700">
          Why Choose Code.Io?
        </h1>
        <p className="text-lg tracking-wide text-gray-500 text-center">
          Build your tech knowledge across any subject. We give you everything
          you need.
        </p>
        <div className="flex flex-col sm:flex-row justify-between ">
          <div className="flex-col justify-between items-center space-y-4">
            <img
              src={
                "https://www.sitepoint.com/static/library-9b2719ba2dbdba3c1cf5055b34d36bd7.svg"
              }
              alt="library"
              height={"200px"}
              width={"200px"}
              loading="lazy"
              className="object-contain mx-auto"
            />
            <h1 className="text-2xl text-center tracking-wider py-6 text-gray-700">
              Explore a Huge Library
            </h1>
            <p className="text-sm font-light text-gray-500 text-center">
              Get access to over 100 posts and courses. Learn twice as fast with
              the ultimate text-based learning experience.
            </p>
          </div>

          {/* ------------getting sitepoint image------------- */}
          <div className="flex-col justify-between items-center space-y-4">
            <img
              src={
                "https://www.sitepoint.com/static/fresh-3a0be289ec902a8a7fc2d5a9a4452e7c.svg"
              }
              alt="fresh"
              height={"200px"}
              width={"200px"}
              loading="lazy"
              className="object-contain mx-auto"
            />
            <h1 className="text-2xl text-center tracking-wider py-6 text-gray-700">
              Get Fresh Content Weekly
            </h1>
            <p className="text-sm font-light text-gray-500 text-center">
              We’re constantly adding new content on web development, design,
              and technology.
            </p>
          </div>
          <div className="flex-col justify-between items-center space-y-4">
            <img
              src={
                "https://www.sitepoint.com/static/community-400d65c822a0d1b68cbb9989c237244e.svg"
              }
              alt="Community"
              height={"200px"}
              width={"200px"}
              loading="lazy"
              className="object-contain mx-auto"
            />
            <h1 className="text-2xl text-center tracking-wider py-6 text-gray-700">
              Join a Vibrant Community
            </h1>
            <p className="text-sm font-light text-gray-500 text-center">
              Join 100,000 developers and designers. Discuss new tech, get fast
              feedback, and a helping hand when you’re stuck.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
