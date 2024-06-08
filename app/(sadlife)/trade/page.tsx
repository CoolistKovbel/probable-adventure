
const Page = () => {
  const avai = false;

  return (
    <section className="w-full min-h-screen">

      <header className="w-full h-[100px] py-10 bg-[#222] text-center">
        <h1 className="text-2xl font-bold">PhotuneLightway Swap</h1>
      </header>

      {avai ? (
        <div className="w-full h-full bg-[#111] p-10 ">
          <form className="w-full bg-[#222] flex items-center flex-col justify-center gap-3 p-4">
            <label
              htmlFor="to"
              className="flex items-center flex-col w-[50%] bg-[#444] mb-3 p-4 rounded-lg drop-shadow-lg"
            >
              
              <div className="flex items-center gap-3">
                <span className="font-bold bg-[#222] p-1 rounded-lg">
                  token1:
                </span>
                <select id="to" name="to" className="text-black">
                  <option value="ETH">eth</option>
                  <option value="NCT">NCT</option>
                </select>
              </div>

              <input
                type="amount"
                placeholder="enter amount"
                id="to"
                name="to"
                className="bg-[#222] p-2 rounded-lg mt-2"
              />
            </label>

            <label
              htmlFor="from"
              className="flex items-center flex-col w-[50%] bg-[#444] p-4 rounded-lg drop-shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="font-bold bg-[#222] p-1 rounded-lg">
                  token2:
                </span>
                <select id="from" name="from" className="text-black">
                  <option value="ETH">eth</option>
                  <option value="NCT">NCT</option>
                </select>
              </div>
              <input
                type="amount"
                placeholder="enter amount"
                id="to"
                name="to"
                className="bg-[#222] p-2 rounded-lg mt-2"
              />
            </label>

            <button className="bg-[#222] p-2 rounded-lg drop-shadow-lg">
              Swap
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full min-h-screen bg-[#333] p-10">
          <h2 className="font-bold">Curremtly in progress ....</h2>
        </div>
      )}
    </section>
  );
};

export default Page;
