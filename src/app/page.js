import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <Image
        width={200}
        height={200} 
        src="./prince.jpeg"  
        alt="Profile"
        className="w-48 h-48 rounded-full shadow-lg border-4 border-white"
      />
      <h1 className="text-4xl font-bold mt-6 text-gray-800">Prince Khunt</h1>
      <p className="text-xl font-medium text-gray-600 mt-4 text-center max-w-lg">
        2nd-Year Student || ML || DL || NLP || GenAI || MERN || KAGGLE Contributor || SSIP India Hackathon '23 Winner
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