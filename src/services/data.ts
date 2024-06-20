import { courseProps } from "../features/courses/CoursesList";

const courses: courseProps[] = [
  {
    background_url: "https://example.com/course1.jpg",
    title: "Course 1: Introduction to Programming",
    description:
      "Learn the basics of programming with this beginner-friendly course.",
    courseRate: "4.5/5",
    teacher: "John Doe",
    price: "$99.99",
    discount: 20,
    discountPrice: 79.99,
  },
  {
    background_url: "https://example.com/course2.jpg",
    title: "Course 2: Advanced Data Structures",
    description:
      "Take your programming skills to the next level with this advanced course.",
    courseRate: "4.8/5",
    teacher: "Jane Smith",
    price: "$149.99",
    discount: 15,
    discountPrice: 127.49,
  },
  {
    background_url: "https://example.com/course3.jpg",
    title: "Course 3: Web Development Fundamentals",
    description:
      "Learn how to build dynamic web applications with this comprehensive course.",
    courseRate: "4.2/5",
    teacher: "Bob Johnson",
    price: "$199.99",
    discount: 25,
    discountPrice: 149.99,
  },
  {
    background_url: "https://example.com/course4.jpg",
    title: "Course 4: Machine Learning with Python",
    description:
      "Unlock the power of machine learning with this hands-on course.",
    courseRate: "4.9/5",
    teacher: "Alice Brown",
    price: "$249.99",
    discount: 10,
    discountPrice: 224.99,
  },
];

export { courses };
