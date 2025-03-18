export const SectionTestimony = () => {
  return (
    <section
      className={
        "w-full h-[600px] bg-[url(/images/bg-gradient.png)] bg-cover flex items-center justify-center"
      }
    >
      <div className={"w-[1094px] h-[270px flex flex-col items-center"}>
        <span className={"text-5xl h-[48px] mb-5 text-white font-semibold"}>Emily Rolando</span>
        <p className={"text-center h-[190px] leading-12 text-white text-[38px]"}>
          {`I recently started learning to code with Tian and it's been a
        game-changer. The lessons are clear and engaging, perfect for beginners
        like me. I've already built my first app thanks to their hands-on
        approach. Highly recommend Tian for anyone starting their coding
        journey!`}
        </p>
      </div>
    </section>
  );
};
