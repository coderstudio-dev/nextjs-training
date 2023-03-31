import Link from 'next/link';

export interface ITagBadge {
  tagName: string;
}

const TagBadge = ({ tagName }: ITagBadge) => {
  return (
    <Link target="_blank" className="tag-badge" href="/">
      #{tagName}
    </Link>
  );
};

export default TagBadge;
