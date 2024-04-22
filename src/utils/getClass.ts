import cn from 'classnames';

const stylePagesPagination =
  'w-8 h-8 flex items-center justify-center font-bold border-2 hover:border-primary';

export const getClassNavLink = ({ isActive }: { isActive: boolean }) =>
  cn(
    'relative flex items-center whitespace-nowrap h-16 transition-colors duration-500 ease-out hover:border-b-4 hover:text-primary hover:border-primary',
    {
      'border-b-4 border-transparent text-secondary': !isActive,
      'border-b-4 border-primary text-primary': isActive,
    },
  );

export const getClassPaginate = ({ isActive }: { isActive: boolean }) =>
  cn(stylePagesPagination, {
    'border-elements bg-white text-primary text-primary': !isActive,
    'border-icons bg-primary text-white hover:bg-white hover:text-primary': isActive,
  });
