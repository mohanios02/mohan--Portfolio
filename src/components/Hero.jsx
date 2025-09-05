import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-white pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-lg mb-6">
            <img 
              src="https://via.placeholder.com/150" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Hi, I'm <span className="text-primary">Mohan</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
  Mobile App Developer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I build exceptional digital experiences with modern technologies.
            Currently focused on creating accessible, user-friendly Mobile applications.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            View My Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}