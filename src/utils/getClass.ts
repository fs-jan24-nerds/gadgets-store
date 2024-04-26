import cn from 'classnames';

export const stylePagesPagination =
  'flex justify-center items-center w-8 h-8 border border-elements hover:bg-accent hover:border-accent hover:text-white';
export const getClassNavLink = ({ isActive }: { isActive: boolean }) =>
  cn(
    'relative text-textMain flex items-center whitespace-nowrap h-16 transition-colors duration-500 ease-out hover:border-b-4 hover:text-primary hover:border-b-primary',
    {
      'border-b-4 border-transparent text-secondary': !isActive,
      'border-b-4 border-primary text-primary': isActive,
    },
  );

export const getClassPaginate = ({ isActive }: { isActive: boolean }) =>
  cn(stylePagesPagination, {
    'border-elements bg-surface-1 text-primary text-primary': !isActive,
    'border-icons text-white bg-accent border-accent': isActive,
  });
