import { PropsWithChildren } from 'react';

type Props = object;

export const Grid = ({ children }: PropsWithChildren<Props>) => {
  return (
    <div className="mx-[8px]">
      <div className="grid grid-cols-mobile tablet:grid-cols-tablet desktop:grid-cols-desktop gap-[16px]">
        {children}
      </div>
    </div>
  );
};
