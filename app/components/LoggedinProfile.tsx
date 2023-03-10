import Image from "next/image";
import Link from "next/link";

type Props = {
  logout: () => void;
};

export default function LoginProfile({ logout }: Props) {
  return (
    <div className='dflex dropdown dropdown-left items-center justify-center'>
      <label tabIndex={0} className='btn-ghost btn-circle avatar btn'>
        <div>
          <Image
            alt='dummy_profile'
            src='/dummy_profile.avif'
            width={40}
            height={40}
            className='rounded-full'
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-300 p-2 shadow-2xl'
      >
        <li>
          <Link href='/write'>글 작성하기</Link>
        </li>
        <li>
          <Link href='/myPosts'>내가 작성한 포스트</Link>
        </li>
        <li>
          <button onClick={logout}>로그아웃</button>
        </li>
      </ul>
    </div>
  );
}
