function About() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-6">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-4xl font-bold tracking-widest text-primary-content">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </p>
    </>
  );
}

export default About;
