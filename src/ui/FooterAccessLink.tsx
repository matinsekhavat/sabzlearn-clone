import { Link } from "react-router-dom";

type AccessLinkBase = {
  title: string;
  path: string;
};

type AccessLinkWithoutIcon = AccessLinkBase;

type AccessLinkWithIcon = AccessLinkBase & {
  icons: JSX.Element;
};

type FooterBaseProps = {
  headTitle: string;
};

type FooterWithoutIconsProps = FooterBaseProps & {
  accessLink: AccessLinkWithoutIcon[];
  hasIcon?: false;
};

type FooterWithIconsProps = FooterBaseProps & {
  accessLink: AccessLinkWithIcon[];
  hasIcon: true;
};

type FooterProps = FooterWithoutIconsProps | FooterWithIconsProps;

function FooterAccessLink({ headTitle, accessLink, hasIcon }: FooterProps) {
  return (
    <div className="">
      <p className="my-3 text-slate-800 font-semibold">{headTitle}</p>
      <ul className="space-y-4 ">
        {accessLink.map((item) => (
          <Link to={item.path} key={item.title} className="block">
            <li
              className={`text-sm sm:text-base text-stone-500 ${
                hasIcon ? "flex items-center gap-2" : ""
              }`}
            >
              {hasIcon && "icons" in item && item.icons && (
                <span>{item.icons}</span>
              )}
              <span>{item.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default FooterAccessLink;
