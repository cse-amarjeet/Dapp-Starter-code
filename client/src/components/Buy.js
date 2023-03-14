import { ethers } from "ethers";
const Buy = ({ state }) => {
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    // console.log("this is Name",name,message,contract);

    const amount = { value: ethers.utils.parseEther("0.0001") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();
    console.log("transaction is success!!");
  };

  return (
    <>
      <form onSubmit={buyChai}>
        <label>Name</label>
        <input type="text" id="name" placeholder="Enter your Name"></input>
        <label>Message</label>
        <input
          type="text"
          id="message"
          placeholder="Enter your message"
        ></input>
        <button type="submit">Pay</button>
      </form>
    </>
  );
};
export default Buy;
