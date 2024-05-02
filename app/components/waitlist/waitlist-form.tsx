import { ContactEmail } from "../../lib/action";

const WaitListForm = () => {
  return (
    <form action={ContactEmail}>
      <input
        type="email"
        placeholder="enter email here"
        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4 p-4 bg-neutral-950 placeholder:text-neutral-700"
        name="content"
        id="content"
      />
       <button className="text-[13px] bg-neutral-950 p-2 hover:text-yellow-500 mt-1 rounded-lg">Subscribe</button>
    </form>
  );
};

export default WaitListForm;
