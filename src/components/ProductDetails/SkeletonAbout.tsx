import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

interface MyLoaderProps extends IContentLoaderProps {}

const SkeletonAbout: React.FC<MyLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={560}
    height={163}
    viewBox="0 0 560 163"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="39" rx="0" ry="0" width="139" height="23" />
    <rect x="0" y="79" rx="0" ry="0" width="542" height="77" />
  </ContentLoader>
);

export default SkeletonAbout;
