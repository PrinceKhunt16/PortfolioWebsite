import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <Image
        width={200}
        height={200} 
        src="./prince.jpeg"  
        alt="Profile"
        className="w-48 h-48 rounded-full shadow-lg border-4 border-white"
      />
      <h1 className="text-4xl font-bold mt-6 text-gray-800">Prince Khunt</h1>
      <p className="text-xl font-medium text-gray-600 mt-4 text-center max-w-lg">
        Generative AI Intern at Confedo AI || Ex - Web Developer Intern at Rain Infotech || ML || DL || NLP || MLOps || MERN || KAGGLE Contributor || 1x Hackathon Winner
      </p>
      <div className="mt-6 flex gap-4">
        <a 
          href="./projects" 
          className="bg-gray-700 text-white px-6 py-2 shadow hover:bg-gray-800 transition"
        >
          View Portfolio
        </a>
        <a 
          href="/resume.pdf" 
          download
          className="bg-gray-800 text-white px-6 py-2 shadow hover:bg-gray-900 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default HomePage;