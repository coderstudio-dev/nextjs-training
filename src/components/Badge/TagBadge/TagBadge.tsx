import Link from 'next/link';

export interface ITagBadge {
  tagName: string;
}

const TagBadge: React.FC<ITagBadge> = ({ tagName }) => {
  return (
    <Link target="_blank" className="tag-badge" href="/">
      #{tagName}
    </Link>
  );
};

export default TagBadge;
