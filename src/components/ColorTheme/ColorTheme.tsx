import { PropsWithChildren } from 'react';
import cn from 'classnames';
import { useColorTheme } from '../../hooks/useColorTheme';

import './ColorTheme.css';

type Props = object;

export const ColorTheme = ({ children }: PropsWithChildren<Props>) => {
  const [theme] = useColorTheme();
  return (
    <div className={cn({
      'light': theme === 'light',
      'dark': theme === 'dark',
      })}
    >
      {children}
    </div>
  )
}
