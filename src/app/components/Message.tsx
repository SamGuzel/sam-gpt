import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};
function Message({ message }: Props) {
  const isSamGPT = message.user.name === "SamGPT";
  return (
    <div className={`py-5 text-white ${isSamGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 m-w-2xl mx-auto ">
        <img
          src={message.user.avatar}
          alt=""
          className="h-8 w-8"
        ></img>
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}
export default Message;
