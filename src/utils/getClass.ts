import cn from 'classnames';

import styles from '../components/Header/Navigation.module.css';

const stylePagesPagination =
  'w-8 h-8 flex items-center justify-center font-bold border-2 hover:border-primary';

export const getClassNavLink = ({ isActive }: { isActive: boolean }) =>
  cn(
    `${styles.navlink} hover:border-b-4 border-primary font-bold tracking-wide leading-3 flex lg:flex-row`,
    { 'navlink-active': isActive, '${styles} text-secondary relative': !isActive },
  );

export const getClassPaginate = ({ isActive }: { isActive: boolean }) =>
  cn(stylePagesPagination, {
    'border-elements bg-white text-primary text-primary': !isActive,
    'border-icons bg-primary text-white hover:bg-white hover:text-primary': isActive,
  });
