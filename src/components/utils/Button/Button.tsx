export interface IButton {
  sampleTextProp: string;
}

const Button: React.FC<IButton> = ({ sampleTextProp }) => {
  return (
    <button className="btn-default hover:btn-hover-transparent">{sampleTextProp}</button>
  );
};

export default Button;
