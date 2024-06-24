import HeroLanding from "../ui/HeroLanding";
import CoursesList from "../features/courses/CoursesList";
import RoadmapList from "../ui/RoadmapList";
import HeadTitle from "../ui/HeadTitle";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { courses } from "../services/data";
import OurServices from "../ui/OurServices";
import { BiBook } from "react-icons/bi";
import { TbMessageCircleHeart } from "react-icons/tb";
import { BsBarChart } from "react-icons/bs";
import WeblogItems from "../features/weblog/WeblogItems";

function HomePage() {
  return (
    <>
      <HeroLanding />
      {/* Show Last courses
       */}
      <HeadTitle
        color="rgb(251 191 36)"
        title="آخرین دوره های سبزلرن"
        subTitle="سکوی پرتاپ شما به سمت موفقیت"
      >
        <Link to="/">مشاهده همه دوره ها</Link>
        <FaLongArrowAltLeft className="mt-1" />
      </HeadTitle>
      {/* Courses */}
      <CoursesList courses={courses} isCarousel={false} />

      {/* Roadmap */}
      <section>
        <RoadmapList />
        {/* sabzlearn suggestion */}
        <HeadTitle
          title="پیشنهاد سبزلرن"
          subTitle="جدید ترین دوره های تکمیل شده"
          color="green"
        />
        <CoursesList courses={courses} isCarousel={true} />
      </section>

      {/* how we can help you */}
      <section className="mt-16">
        <HeadTitle
          color="#3b82f6"
          title="ما چه کمکی میتونیم بهت بکنیم"
          subTitle="از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره"
        />

        <div className="grid grid-cols-1 gap-8 container md:grid-cols-2 ">
          <OurServices
            title="تضمین کاملترین محتوا"
            description="بزار خیالت راحت کنم توی دوره هامون به ریز ترین موارد پرداختیم بعداز دیدن این دوره نیاز به هیچ آموزش دیگه ای نداری."
            icon={
              <BiBook className="text-[2.5rem] text-blue-600 -mt-4 lg:mt-0 lg:-mr-6" />
            }
            iconBgInstance="rgb(196, 209, 238, 0.2)"
            iconColor="red"
          />{" "}
          <OurServices
            title="پشتیبانی دائمی"
            description="هرجا سوالی داشتی به مشکل خوردی بچه های تیم آمادن که مشکلت رو حل کنن تلاشمون اینه بدون نگرانی دوره رو کامل کنی."
            icon={
              <TbMessageCircleHeart className="text-[2.5rem] text-yellow-400 -mt-4 lg:mt-0 lg:-mr-6" />
            }
            iconBgInstance="rgb(235, 252, 0 , 0.2)"
            iconColor="red"
          />{" "}
          <OurServices
            title="پروژه محور در راستای بازار کار"
            description="کل تمرکز ما رو این هستش بعداز تموم شدن دوره شخص بتونه با اعتماد به نفس کامل پروژه بزنه واقدام کنه برای کسب درآمد."
            icon={
              <BsBarChart className="text-[2.5rem] text-green-600 -mt-4 lg:mt-0 lg:-mr-6" />
            }
            iconBgInstance="rgb(53, 221, 31,0.2)"
            iconColor="red"
          />{" "}
          <OurServices
            title="سراغ حرفه ای ها رفتیم"
            description="به جرعت میتونم بگم سخت گیرترین شرایط جذب مدرس داریم چون برامون مهمه محتوا خیلی ساده و روان بیان بشه که توی یادگیری به مشکل نخورید."
            icon={
              <BiBook className="text-[2.5rem] text-red-500 -mt-4 lg:mt-0 lg:-mr-6" />
            }
            iconBgInstance="rgb(233, 129, 129 , 0.2)"
            iconColor="red"
          />
        </div>
      </section>

      {/* Sabzleran Weblog */}
      <section className="mt-16 container">
        <HeadTitle
          color="yellow"
          title="وبلاگ آموزشی سبزلرن"
          subTitle="مقالات بروز برنامه نویسی"
        >
          <Link to="/">مشاهده همه مقالات </Link>
          <FaLongArrowAltLeft className="mt-1" />
        </HeadTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <WeblogItems
            author="متین سخاوت"
            date="1403/02/01"
            description="دیتابیس چیست؟ دیتابیس، فقط یک سری از جداول و رکوردهای خشک و بی‌روح نیست. بلکه یک دیدگاه جامع و یک نگرش زنده به مدیریت و ذخیره‌سازی داده‌هاست. در این"
            title="پایگاه داده یا دیتابیس چیست؟ از انواع تا کاربرد دیتابیس"
          />
          <WeblogItems
            author="متین سخاوت"
            date="1403/07/01"
            description="در دنیای فناوری اطلاعات، انواع زبان های برنامه نویسی مانند زبان‌های گفتاری برای ارتباط با رایانه‌ها هستند. این زبان‌ها، به ما امکان می‌دهند تا توسعه دهندگان نرم‌افزار با استفاده"
            title="اشنایی با زبان های برنامه نویسی در 2024"
          />
          <WeblogItems
            author="متین سخاوت"
            date="1403/02/01"
            description="سرور چیست؟ بیشتر از هر زمان دیگری، سرورها به عنوان اساس حیاتیِ فناوری اطلاعات و ارتباطات محسوب می‌شوند. آن‌ها اصلی‌ترین عامل در ارائه خدمات آنلاین، ذخیره‌سازی"
            title="سرور چیست و چه کاربرد هایی دارد؟ + 8 کاربرد مهم"
          />
          <WeblogItems
            author="متین سخاوت"
            date="1403/02/09"
            title="داکر چیست؟ از کاربرد تا نصب"
            description="داکر چیست؟ یکی از این فناوری‌ها که به سرعت جا افتاده و به سرعت توسط توسعه‌دهندگان پذیرفته شده، داکر است. این فناوری، یک ابزار کارآمد در زمینه مجازی‌سازی"
          />
        </div>
      </section>
    </>
  );
}

export default HomePage;
