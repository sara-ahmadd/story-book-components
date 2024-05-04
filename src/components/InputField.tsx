import { useRef } from "react";

function InputField({
  placeholder,
  classes,
}: {
  placeholder: string;
  classes: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        placeholder={placeholder}
        className={`${classes}`}
        ref={inputRef}
      />
    </>
  );
}

export default InputField;
