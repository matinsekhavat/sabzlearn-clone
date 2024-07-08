import { Link } from "react-router-dom";

function TeacherBox() {
  return (
    <div className="bg-white rounded-xl p-4 space-y-6">
      <img
        src="https://secure.gravatar.com/avatar/50db59beddbfed36a1646dae99ca7b2d?s=96&d=mm&r=g"
        alt="Teacher images"
        className="block mb-4 mx-auto object-cover rounded-full h-[90px]"
      />

      <p className="text-center font-semibold text-lg">
        <span>محمدامین سعیدی راد</span>
        <span> | مدرس دوره</span>
      </p>
      <Link
        to="/teacher"
        className="border border-green-500 p-4 text-green-500 rounded-full block text-center w-full max-w-56 mx-auto hover:bg-green-500 hover:text-white transition-all "
      >
        مشاهده پروفایل من
      </Link>
    </div>
  );
}

export default TeacherBox;
