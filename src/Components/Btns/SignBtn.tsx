import { ISignBtnProps } from "@/Types/Types";

export default function SignBtn({ text, icon }: ISignBtnProps) {
  return (
    <button className="bg-[#484848] focus:outline-none transition-all ease-linear flex items-center justify-center space-x-2 text-white hover:bg-[orange] py-2 px-4 rounded-lg">
      <span>{icon}</span>

      <span>{text}</span>
    </button>
  );
}
