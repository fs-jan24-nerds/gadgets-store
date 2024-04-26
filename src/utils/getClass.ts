import cn from 'classnames';

export const stylePagesPagination =
  'flex justify-center items-center w-8 h-8 border border-elements hover:border-primary hover:bg-accent hover:border-accent hover:text-white';
// const stylePagesPagination =
//   'w-8 h-8 flex items-center justify-center font-bold border-2 hover:border-primary';
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
    // 'border-icons bg-primary text-white hover:bg-white hover:text-primary': isActive,
    'border-icons text-white bg-accent border-accent': isActive,
  });
