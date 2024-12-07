const AboutPage = async () => {
  return (
    <section>
      <h1 className="flex flex-wrap items-center justify-center gap-2 text-center text-3xl font-medium leading-none tracking-wide sm:gap-x-6 sm:text-5xl">
        We love
        <span className="tracking-lg rounded-lg bg-primary px-4 py-2 text-white">
          Voila!
        </span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 tracking-wide text-muted-foreground">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
        repudiandae delectus facere provident, enim debitis laboriosam quibusdam
        dolor molestiae temporibus ducimus, eius id ea fugit eum culpa quia at
        rerum.
      </p>
    </section>
  );
};
export default AboutPage;
