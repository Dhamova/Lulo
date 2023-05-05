import Link from "next/link";

export default function HeroSection() {
  return (
    <div className='relative isolate px-6 pt-14 lg:px-8'>
      <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
        <div className='text-center'>
          <h1 className='text-4xl font-mono font-bold text-neutral-900 dark:text-white'>
            Find your favourite repository
          </h1>
          <div className='bg-white dark:bg-neutral-900 items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-5 sticky mt-5'>
            <input
              className='font-medium font-mono lowercase rounded-full w-full py-4 pl-4 text-neutral-700 bg-gray-100 dark:bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs'
              type='text'
              placeholder='organization/example'
            />

            <div className='bg-neutral-600 dark:bg-neutral-800 p-2 hover:bg-black cursor-pointer mx-2 rounded-full'>
              <svg
                className='w-6 h-6 text-white'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
          <p className='mt-6 text-m leading-8 text-neutral-600 dark:text-neutral-400'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              href='/manifesto'
              className='text-sm font-mono font-semibold leading-6 text-neutral-900 dark:text-neutral-100'
            >
              Learn more <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
