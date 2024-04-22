import { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

export const GridItem = ({
  children,
  className = 'col-span-4 tablet:col-span-12 desktop:col-span-24',
}: PropsWithChildren<Props>) => <div className={className}>{children}</div>;
