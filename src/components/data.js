import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/ph-1.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Что есть в нашем музее",
  desc: "Наш Учебный центр, названный в её честь, стремится передавать ученикам не только научные знания, но и человеческие ценности, которые она так высоко ценила. Мы верим, что это наследие поможет вам найти свои собственные пути в помощи людям. Добро пожаловать в мир Натальи Петровны Бехтеревой — мир, где наука и человечность идут рука об руку!",
  image: benefitOneImg,
  bullets: [
    {
      title: "Читайте записи о Н.П. Бехтеревой",
      desc: 'В "Блоге" вы можете ознакомиться с текстами, посвященными Н.П. Бехтеревой и её открытиям',
      icon: <FaceSmileIcon />,
    },
    {
      title: "Посмотрите галерею фотографий",
      desc: "Мы собрали большой архив фотографий, представленных семьей Н.П. Бехтеревой, а также окрасили их при помощи искусственного интеллекта",
      icon: <ChartBarSquareIcon />,
    },
    
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
