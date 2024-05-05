import { useRef } from "react";

function InputField({
  placeholder,
  classess = "",
}: {
  placeholder: string;
  classess: string | undefined;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        placeholder={placeholder}
        className={`w-full px-[16px] py-[8px] capitalize border-2 border-borderColor outline-none ${classess}`}
        ref={inputRef}
      />
    </>
  );
}

export default InputField;
