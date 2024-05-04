import { useRef } from "react";

function TextArea({
  placeholder,
  cols,
  rows,
  classes,
}: {
  placeholder: string;
  cols: number;
  rows: number;
  classes: string;
}) {
  const msgRef = useRef<HTMLTextAreaElement>(null);
  return (
    <textarea
      name={placeholder}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      ref={msgRef}
      className={`${classes}`}
    />
  );
}

export default TextArea;
