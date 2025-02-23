import Button from "./Button";
const Navbar = () => {
  return (
    <div className="font-['Satoshi'] max-w-screen-xl py-3 mx-auto flex px-5 items-center justify-between border-b-1 border-zinc-600 h-fit ">
      <div className="nleft h-full flex items-center justify-center gap-18">
      <img
        className="h-[3.5vh]"
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />
      <div className="gap-10 cursor-pointer h-full flex links ml-2 text-sm  ">
        {["Home", "Work", "Careers", "", "News"].map((elem, idx) =>
          elem.length === 0 ? (
            <span key={idx} className="w-1 h-12 py-0 my-0 bg-zinc-800"></span>
          ) : (
            <a key={idx} className="cursor-pointer text-sm flex self-center">
              {idx === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.25em #00FF19" }}
                  className="inline-block mt-1 h-[8px] w-[8px] mr-2 rounded-full bg-green-500 cursor-pointer"
                ></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
