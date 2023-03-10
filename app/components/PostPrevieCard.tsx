import { PostType } from "@/constants/dummy";
import Image from "next/image";
import moment from "moment";
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
    <div className='flex h-[150px] border-2 sm:h-[200px]'>
      <div className='relative flex-[1]'>
        <Image alt={title} src={image} fill className='object-cover' />
      </div>
      <div className='flex flex-[1] flex-col items-center justify-center'>
        <div className='flex items-center gap-2 text-sm text-gray-400'>
          <div className='h-9 w-9 overflow-hidden rounded-full'>
            <Image alt='' src='/dummy_profile.avif' width={40} height={40} />
          </div>
          <div className='flex flex-col'>
            <div>Jane Doh</div>
            <div>{moment(createdAt).format("YYYY MM DD")}</div>
          </div>
        </div>
        <h2 className='font-bold text-neutral sm:text-xl'>{title}</h2>
      </div>
    </div>
  );
}
