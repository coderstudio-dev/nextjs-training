import Image from "next/image";
import Button from "../../Button/Button";
import CustomLink from "../../utils/Typography/Link/CustomLink";

export interface IProfileCardBlock {
  name: string;
  about: string;
  // followHandler: function;
  // metaData: Array<string>;
}

const ProfileCardBlock: React.FC<IProfileCardBlock> = ({ name, about }) => {

  const metaData = [
    {
      name: 'email',
      value: 'ben@forem.com'
    },
    {
      name: 'work',
      value: 'Co-founder at Forem'
    },
    {
      name: 'location',
      value: 'NY'
    },
    {
      name: 'education',
      value: 'Mount Allison University'
    },
    {
      name: 'joined',
      value: 'December 27, 2015'
    },
  ]

  return (
    <div className="card-border max-w-360">
      <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4SKDYr1hw_boMWSUZ2Jo8AObM5Gh31iCvTA&usqp=CAU')] w-full h-7">

      </div>
      <div className="p-3">
        <div className="flex -mt-7 mb-2 items-end">
          <CustomLink url='#' content={
            <Image
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Logo"
              width={0}
              height={0}
              style={{
                width: '48px',
                height: '48px',
                objectFit: "cover",
                borderRadius: "50%"
              }}
            />
          } />
          <CustomLink url='#' className='ml-3' content={<p className="text-lg text-slate-800 font-bold">{name}</p>} />
        </div>
        <Button buttonType='btn-primary' content='Follow' className="font-semibold w-full my-2" />

        <div className="text-muted mt-2">
          <p>{about}</p>
        </div>
        <ul>
          {
            metaData.map((data, idx) => (
              <li className="pt-3" key={idx}>
                <small className="font-bold text-uppercase text-muted">
                  {data.name.toUpperCase()}
                </small>
                <p>
                  {data.value}
                </p>
              </li>
            ))
          }

        </ul>
      </div>
    </div >
  );
};

export default ProfileCardBlock;
