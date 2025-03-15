import { play, splash4 } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 scale-75 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={splash4}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const ChatMessage = () => {
  return (
    <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black
    rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[18.75rem]
    lg:max-w-[17.5rem]">
      Coach, is Ryu's Heavy Punch punishable on block?
      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

export const VideoBar = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6 bg-n-8/60
    backdrop-blur-md">
      <img
        src={play}
        width={24}
        height={24}
        alt="Play"
        className="object-contain mr-3"
      />

      <div className="flex-1 bg-[#D9D9D9]">
        <div className="w-1/2 h-0.5 bg-color-1"></div>
      </div>
    </div>
  );
};