import { PostType } from "@/constants/dummy";
import Image from "next/image";

export default function PostPreviewCard({
  image,
  address,
  author,
  contents,
  createdAt,
  id,
  title,
}: PostType) {
  return (
    <div className='flex border-2'>
      <div className='aspect-img relative w-1/3'>
        <Image alt={title} src={image} fill className='object-cover' />
      </div>
      <h2>{title}</h2>
    </div>
  );
}
