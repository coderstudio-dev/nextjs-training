import Head from 'next/head';

export interface IPrimaryLayout {
  justify?: 'items-center' | 'items-start';
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
}) => {
  return (
    <>
      <Head>
        <title> Primary Layout Example</title>
      </Head>
      <div className={`flex min-h-screen flex-col ${justify}`}>
        <main className="p-5">{children}</main>
        <div className="m-auto" />
      </div>
    </>
  );
};

export default PrimaryLayout;
