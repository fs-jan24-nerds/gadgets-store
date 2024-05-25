import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

interface MyLoaderProps extends IContentLoaderProps {}

const SkeletonTechSpex: React.FC<MyLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={320}
    height={240}
    viewBox="0 0 320 240"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="15" rx="0" ry="0" width="320" height="240" />
  </ContentLoader>
);

export default SkeletonTechSpex;
