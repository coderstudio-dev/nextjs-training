import { type NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBirthdayCake, FaExternalLinkAlt, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import Button from '../../components/Button/Button';
import Content from '../../components/utils/Typography/Content/Content';
import PageTemplate from '../hoc/pageTemplate.page';


const Author: NextPage = () => {
  const { query } = useRouter();
  console.log(query);

  const authorDetails = [
    {
      isLink: false,
      data: 'Kolkata, West Bengal, India',
      icon: <FaMapMarkerAlt />
    },
    {
      isLink: false,
      data: 'Joined on Dec 4, 2020',
      icon: <FaBirthdayCake />
    },
    {
      isLink: true,
      data: 'https://tapajyoti-bose.vercel.app/',
      icon: <FaExternalLinkAlt />,
      url: 'https://tapajyoti-bose.vercel.app/'
    },
    {
      isLink: true,
      data: '',
      icon: <FaGithub />,
      url: 'https://tapajyoti-bose.vercel.app/'
    },
  ]

  return (
    <main className="min-h-screen">
      <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4SKDYr1hw_boMWSUZ2Jo8AObM5Gh31iCvTA&usqp=CAU')] w-full h-32">

      </div>
      <div className='container mx-auto -mt-14 max-w-992'>
        <div className='card-border w-100 p-5'>
          <div className='relative flex justify-end items-end w-100'>
            <Image
              className='absolute left-0 right-0 m-auto'
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Logo"
              width={0}
              height={0}
              style={{
                width: '112px',
                height: '112px',
                objectFit: "cover",
                borderRadius: "50%"
              }}
            />
            <Button className='mr-1' buttonType='btn-primary' content='Follow' />
            <Button
              content={
                <Image
                  src="assets/meatball-icon.svg"
                  alt="Logo"
                  width={25}
                  height={25}
                />
              }
              buttonType="btn-transparent"
            />
          </div>
          <div className='flex flex-col justify-center items-center text-center mt-8 px-20'>
            <p className='text-3xl font-extrabold mb-2'>Bryan Matias</p>
            <p className='text-lg mb-4'>Top Rated Freelancer || Blogger || Cross-Platform App Developer || Web Developer || Open Source Contributor</p>
            <div className='flex flex-wrap'>
              {
                authorDetails.map((detail, index) =>
                  detail.isLink ? <Link key={index} href={detail.url || '#'}>
                    <Content
                      className='px-3 py-1 text-muted'
                      content={detail.data}
                      icon={<div className='text-xl'>{detail.icon}</div>} withIcon />
                  </Link>
                    :
                    <Content
                      key={index}
                      className='px-3 py-1 text-muted'
                      content={detail.data}
                      icon={<div className='text-xl'>{detail.icon}</div>} withIcon />
                )
              }
            </div>
          </div>

        </div>
        <div className="flex space-x-0 mdtb:space-x-4">
          <div className="hidden h-auto w-64 flex-none space-y-4 mdtb:inline bg-red-500">
            <div>article menu</div>
          </div>
          <div className="w-m h-auto flex-auto space-y-4 mdtb:m-0 bg-green-500">
            Main Component
          </div>
        </div>
      </div>

    </main>
  );
};

export default PageTemplate('author', Author);
