import cn from 'classnames';

export const getClass = ({ isActive }: { isActive: boolean }) =>
  cn(`hover:border-b-4 border-primary font-bold tracking-wide leading-3 flex lg:flex-row`, {
    'navlink-active': isActive,
    '${styles} text-secondary relative': !isActive,
  });
