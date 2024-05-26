import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

interface MyLoaderProps extends IContentLoaderProps {}

const PhotoLoader: React.FC<MyLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={302}
    height={407}
    viewBox="0 0 302 407"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="302" height="407" />
  </ContentLoader>
);

export default PhotoLoader;
