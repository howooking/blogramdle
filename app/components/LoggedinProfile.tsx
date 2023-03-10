import Image from "next/image";
import Link from "next/link";

export default function LoginProfile() {
  return (
    <div className='dropdown-end dropdown'>
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
        className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'
      >
        <li>
          <Link href='/profile' className='justify-between'>
            프로필
          </Link>
        </li>
        <li>
          <Link href='/myPosts'>내가 작성한 포스트</Link>
        </li>
        <li>
          <button>로그아웃</button>
        </li>
      </ul>
    </div>
  );
}
