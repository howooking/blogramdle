"use client";

import Container from "../components/Container";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

export default function Write() {
  const [contentsInput, setContentsInput] = useState("");
  // const [mounted, setMounted] = useState(false);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (mounted) {
  const ReactQuill =
    typeof window === "object" ? require("react-quill") : () => false;
  return (
    <Container>
      <div className='flex h-[500px] gap-5'>
        <div className='flex-[5]'>
          <ReactQuill
            theme='snow'
            value={contentsInput}
            onChange={setContentsInput}
            className='text-editor-height'
          />
        </div>
        <div className='flex-[2] bg-slate-200'>전송, 이미지업로드</div>
      </div>
    </Container>
  );
}
//   else {
//     <>Loading</>;
//   }
// }
