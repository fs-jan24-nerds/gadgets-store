import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

interface MyLoaderProps extends IContentLoaderProps {}

const SkeletonName: React.FC<MyLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={500}
    height={40}
    viewBox="0 0 500 40"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="500" height="40" />
  </ContentLoader>
);

export default SkeletonName;
