export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://via.placeholder.com/400" 
                alt="About" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-secondary mb-4">Who am I?</h3>
            <p className="text-gray-600 mb-4">
              I'm a passionate frontend developer with 5 years of experience creating
              modern web applications. I specialize in React, JavaScript, and CSS,
              and I'm always eager to learn new technologies.
            </p>
            <p className="text-gray-600 mb-6">
              My approach combines technical expertise with an eye for design,
              resulting in applications that are both functional and visually appealing.
              I believe in writing clean, maintainable code and creating intuitive
              user experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-semibold text-gray-800">Name:</h4>
                <p className="text-gray-600">John Doe</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email:</h4>
                <p className="text-gray-600">john@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">From:</h4>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Experience:</h4>
                <p className="text-gray-600">5+ Years</p>
              </div>
            </div>
            
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-medium transition duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}