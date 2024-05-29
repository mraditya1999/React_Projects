import { SlGraduation, SlPeople } from 'react-icons/sl';
import { FiVideo } from 'react-icons/fi';
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from 'react-icons/fa';

export const courses = [
  {
    id: 1,
    title: 'The Complete 2023 Web Development Bootcamp',
    category: 'Web Dev',
    rating: 4,
    price: '$59.99',
    linkImg:
      'https://imgs.search.brave.com/ZkwGbElTOq8Zo7NeRU669-o016O6XSLJftZZ5I--HJg/rs:fit:750:422:1/g:ce/aHR0cHM6Ly9kaXNj/b3VudHNlcmllcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMTEvMTAwLWRh/eXMtb2YtY29kZS10/aGUtY29tcGxldGUt/cHl0aG9uLXByby1i/b290Y2FtcC1mb3It/MjAyMi1jb3Vyc2Uu/anBn',
  },
  {
    id: 2,
    title:
      'Learn Python: The Complete Python Programming CourseLearn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!',
    category: 'Python',
    rating: 4,
    price: '$59.99',
    linkImg:
      'https://imgs.search.brave.com/Nhj_cLAZOWcUjlnR8QMX8A02rX-2RYra9w-0j-B9Rbg/rs:fit:750:422:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IxLzJi/L2NjL2IxMmJjYzA4/YmQ4YzlhOTFjMmM5/NjY3ZTM5NzE1NzA0/LmpwZw',
  },
  {
    id: 3,
    title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
    category: 'Javascript',
    rating: 4,
    price: '$59.99',
    linkImg:
      'https://imgs.search.brave.com/ERyn_YUVTbB0slaulPioLMmU7Zto9A8aCA6OPptRZkI/rs:fit:768:432:1/g:ce/aHR0cHM6Ly9jb3Vy/c2Vjb3Vwb25jbHVi/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8wMy84NTE3/MTJfZmM2MV82LTc2/OHg0MzIuanBn',
  },
  {
    id: 4,
    title: 'Cuphead',
    category: 'Flutter',
    rating: 4,
    price: '$19.99',
    linkImg:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/c/cuphead-switch/hero?_a=AJADJWI0',
  },
  {
    id: 5,
    title: 'Minecraft',
    category: 'Flutter',
    rating: 4,
    price: '$29.99',
    linkImg:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/m/minecraft-switch/hero?_a=AJADJWI0',
  },
  {
    id: 6,
    title: 'Mario + Rabbids® Kingdom Battle',
    category: 'Flutter',
    rating: 4,
    price: '$59.99',
    linkImg:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/u/unravel-two-switch/hero?_a=AJADJWI0',
  },
  {
    id: 7,
    title: 'Unravel Two',
    category: 'Flutter',
    rating: 4,
    price: '$59.99',
    sale: 63,
    linkImg:
      'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_auto/c_scale,w_300/v1/ncom/en_US/games/switch/u/unravel-two-switch/hero?_a=AJADJWI0',
  },
];

export const navItems = [
  {
    id: 1,
    text: 'Home',
  },
  {
    id: 2,
    text: 'About',
  },
  {
    id: 3,
    text: 'Support',
  },
  {
    id: 4,
    text: 'Platform',
  },
  {
    id: 5,
    text: 'Pricing',
  },
];

export const achievements = [
  {
    id: 1,
    bgColor: 'bg-[#E9F8F3]',
    icon: <SlGraduation size={30} />,
    iconColor: '#1A906B',
    number: '300',
    title: 'Instructor',
  },
  {
    id: 2,
    bgColor: 'bg-[#FFFAF5]',
    icon: <FiVideo size={30} />,
    iconColor: '#FFC27A',
    number: '10,000+',
    title: 'Video',
  },
  {
    id: 3,
    bgColor: 'bg-[#FFEEF0]',
    icon: <SlGraduation size={30} />,
    iconColor: '#ED4459',
    number: '20,000+',
    title: 'Student',
  },

  {
    id: 4,
    bgColor: 'bg-[#F0F7FF]',
    icon: <SlPeople size={30} />,
    iconColor: '#0075FD',
    number: '1,00,000+',
    title: 'Users',
  },
];

export const footerItems = [
  {
    id: 1,
    text: 'Design',
  },
  {
    id: 2,
    text: 'Development',
  },
  {
    id: 3,
    text: 'Marketing',
  },
  {
    id: 4,
    text: 'Business',
  },
  {
    id: 5,
    text: 'Lifestyle',
  },
  {
    id: 6,
    text: 'Photography',
  },
  {
    id: 7,
    text: 'Music',
  },
];

export const socialItems = [
  {
    id: 1,
    icon: <FaFacebookF size={25} />,
  },
  {
    id: 2,
    icon: <FaDribbble size={25} />,
  },
  {
    id: 3,
    icon: <FaLinkedinIn size={25} />,
  },
  {
    id: 4,
    icon: <FaInstagram size={25} />,
  },
  {
    id: 5,
    icon: <FaBehance size={25} />,
  },
];
