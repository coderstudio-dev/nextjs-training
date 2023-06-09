import { type NextPage } from 'next';
import { useRouter } from 'next/router';
import PageTemplate from '../hoc/pageTemplate.page';

const Author: NextPage = () => {
  const { query } = useRouter();
  console.log(query);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          AUTHOR PAGE
        </h1>
      </div>
    </main>
  );
};

export default PageTemplate('author', Author);
