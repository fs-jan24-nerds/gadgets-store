import cl from './MyModal.module.css';

interface MyModalProps {
  visible: boolean;
  children: React.ReactChild | React.ReactNode;
  changeVisible: (_: boolean) => void;
}

export const MyModal: React.FC<MyModalProps> = ({ children, visible, changeVisible }) => {
  const rootClasses = [cl.myModal];
  if (visible) {
    rootClasses.push(cl.active);
  }
  const rootClassesContent = [cl.myModalContent];
  if (visible) {
    rootClassesContent.push(cl.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => changeVisible(false)}>
      <div className={rootClassesContent.join(' ')} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};


