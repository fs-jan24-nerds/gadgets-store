import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

interface MyLoaderProps extends IContentLoaderProps {}

const PhotosLoader: React.FC<MyLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={90}
    height={80}
    viewBox="0 0 90 80"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="120" height="120" />
  </ContentLoader>
);

export default PhotosLoader;
