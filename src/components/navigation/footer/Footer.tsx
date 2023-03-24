import Link from "next/link";

export interface IFooter {
  sampleTextProp: string;
}

const Footer: React.FC<IFooter> = ({ sampleTextProp }) => {
  const footerLinks = [
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },
    {
      text: 'lorem',
      url: 'https://localhost:3000'
    },

  ]
  return (
    <footer
      className='w-full p-5 bg-slate-100 text-slate-500 text-center'
    >
      <p><a className='text-sky-400' href='#'>Lorem ipsum</a> - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, cumque?</p>
      <div className="w-full max-md:grid grid-cols-4 my-4 flex justify-center">
        {
          footerLinks.map((footerLink, idx) => {
            return (<Link className='px-2 text-sky-400 first:list-none max-md:list-none' key={idx} href={footerLink.url}><li>{footerLink.text}</li>
            </Link>)
          })
        }
      </div>
      <p className="py-2">
        Lorem ipsum dolor sit amet consectetur, adipisici~ng elit. Quos dolorem ullam adipisci explicabo accusamus sequi.
      </p>
      <p className="py-2">
        <a className='text-sky-400' href='#'>Lorem ipsum</a> dolor sit amet consectetur, adipisicing elit.
      </p>
    </footer>
  );
};

export default Footer;