import { Link } from "react-router-dom";

type FooterProps = {
  headTitle: string;
  accessLink: { title: string; path: "/" }[];
};

function FooterAccessLink({ headTitle, accessLink }: FooterProps) {
  return (
    <div>
      <p className="my-3">{headTitle} </p>
      <ul className="space-y-4">
        {accessLink.map((item) => (
          <Link to={item.path} key={item.title} className="block">
            <li className="text-sm text-stone-500">{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default FooterAccessLink;
