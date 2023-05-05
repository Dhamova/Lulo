import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear().toString();
  return (
    <footer className='rounded-lg mb-4 mx-auto w-10/12'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © {currentYear}{" "}
          <a href='https://flowbite.com/' className='hover:underline'>
            Lulo™
          </a>
          . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <Link href='#' className='mr-4 hover:underline md:mr-6'>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href='#' className='mr-4 hover:underline md:mr-6'>
              Terms &amp; Conditions
            </Link>
          </li>
          <li>
            <Link href='#' className='hover:underline'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
