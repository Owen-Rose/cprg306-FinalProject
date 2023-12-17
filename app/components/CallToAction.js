import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="bg-orange py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Dive In?
        </h2>
        <p className="text-lg text-white mb-8">
          Join Web Wizards and take your web development skills to the next
          level.
        </p>
        <Link
          href="/membership"
          className="px-6 py-3 bg-white text-black font-medium rounded-full uppercase hover:bg-orange hover:text-white transition duration-300"
        >
          Become a Member
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
