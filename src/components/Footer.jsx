const Footer = () => {
  return (
    <div className="w-full px-5 py-10">
      <div className="max-w-screen-xl px-10 flex justify-between gap-2 mx-auto ">
        <div className="left basis-1/2">
          <h1 className="text-[11rem] font-semibold tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="right basis-1/2 flex  justify-end">
          <div className="flex flex-col items-start w-[30%] ">
            <h1 className="text-xl mb-4 text-zinc-300 font-bold">Socials</h1>
            {["instagram", "twitter (X ?)", "LinkedIn"].map((elem, idx) => {
              return (
                <a className="my-1 text-lg text-zinc-500 font-semibold" key={idx}>
                  {elem}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col w-[30%] ">
            <h1 className="text-xl mb-4 text-zinc-300 font-bold">Sitemao</h1>
            {["Home", "work", "careers", "contacts"].map((elem, idx) => {
              return (
                <a className="my-1 text-lg text-zinc-500 font-semibold" key={idx}>
                  {elem}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col w-[35%] justify-between py-4">
            <p className="text-lg ">Refokus is pioneering digital agency driven by design and empowered by technology.</p>
            <img className="w-[75%] flex self-end" src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" alt="enterprise" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
