// component
import SearchImage from '../../../components/assets/img/search-side.png'
import ServicesImage from '../../../components/assets/img/services-side.png'
import AboutImage from '../../../components/assets/img/about.png'
import AssociateImage from '../../../components/assets/img/associate-side.png'
import FaqImage from '../../../components/assets/img/faq-side.png'
import ContactImage from '../../../components/assets/img/contact-side.png'

// ----------------------------------------------------------------------


const navConfig = [
  {
    title: 'Search Portal',
    path: '/search',
    icon: SearchImage,
  },
  {
    title: 'Our Services',
    path: '/services',
    icon: ServicesImage,
  },
  {
    title: 'About Us',
    path: '/about',
    icon:AboutImage,
  },
  {
    title: 'Associate With Us',
    path: '/associate',
    icon: AssociateImage,
  },
  {
    title: 'FAQ',
    path: '/faq',
    icon: FaqImage,
  },
  {
    title: 'Contact Us',
    path: '/contact',
    icon: ContactImage,
  },
];

export default navConfig;
