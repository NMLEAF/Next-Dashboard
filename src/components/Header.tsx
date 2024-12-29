import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="Search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none text-gray-500"
        />
      </div>

      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="flex items-center justify-center rounded-full w-7 h-7 bg-white cursor-pointer">
          <Image src="/message.png" alt="message" width={20} height={20} />
        </div>

        <div className="flex items-center justify-center rounded-full w-7 h-7 bg-white cursor-pointer relative">
          <Image src="/announcement.png" alt="message" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-medium leading-3">Abebe Feleke</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>

        {/* <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="rounded-full"
        /> */}
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
