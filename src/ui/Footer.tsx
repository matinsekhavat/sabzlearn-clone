import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import FooterAccessLink from "./FooterAccessLink";

function Footer() {
  return (
    <footer className="bg-white  py-8 px-4 mt-8">
      <div className="container">
        {/* access link */}
        <div className="grid grid-1 sm:grid-cols-2 sm:gap-8 md:grid-cols-4 pb-4 ">
          <div className="space-y-4">
            <h3 className="text-lg">درباره ما</h3>
            <p className="text-green-600 font-semibold text-sm">
              سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل
              نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند
            </p>
          </div>
          <FooterAccessLink
            headTitle="دسترسی سریع"
            accessLink={[
              { title: "قوانین و مقررات", path: "/" },
              { title: "ارسال تیکت", path: "/" },
              { title: "همه دوره ها", path: "/" },
            ]}
          />
          <FooterAccessLink
            headTitle="لینک مفید"
            accessLink={[
              { title: "آموزش جاوااسکریپت", path: "/" },
              { title: "آموزش React.js", path: "/" },
              { title: "آموزش نکست جی اس", path: "/" },
              { title: "آموزش PWA", path: "/" },
            ]}
          />
          <FooterAccessLink
            headTitle="شبکه های اجتماعی"
            hasIcon={true}
            accessLink={[
              { title: "@matin.sekhavat", path: "/", icons: <FaTelegram /> },
              { title: "@matin_sekhavat", path: "/", icons: <FaInstagram /> },
              { title: "@matinsekhavat", path: "/", icons: <FaLinkedin /> },
            ]}
          />
        </div>
        {/* footer downside */}
        <div className="border-t border-stone-300 py-8 my-4 flex flex-col gap-y-6 sm:flex-row sm:justify-between">
          <p>ساخته شده با 💖 در سبزلرن</p>
          <p className="text-slate-700">
            کلیه حقوق مادی و معنوی سایت برای سبز لرن محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
