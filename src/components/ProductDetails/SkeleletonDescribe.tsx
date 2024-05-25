import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

interface MyLoaderProps extends IContentLoaderProps {}

const SkeletonDescribe: React.FC<MyLoaderProps> = (props) => (
  <ContentLoader
    speed={2}
    width={320}
    height={407}
    viewBox="0 0 320 407"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="5" rx="0" ry="0" width="106" height="13" />
    <rect x="205" y="6" rx="0" ry="0" width="115" height="12" />
    <circle cx="15" cy="40" r="15" />
    <circle cx="54" cy="40" r="15" />
    <circle cx="94" cy="40" r="15" />
    <circle cx="134" cy="40" r="15" />
    <rect x="0" y="105" rx="0" ry="0" width="93" height="15" />
    <rect x="0" y="130" rx="0" ry="0" width="50" height="25" />
    <rect x="66" y="130" rx="0" ry="0" width="50" height="25" />
    <rect x="126" y="130" rx="0" ry="0" width="50" height="25" />
    <rect x="185" y="130" rx="0" ry="0" width="50" height="25" />
    <rect x="0" y="200" rx="0" ry="0" width="126" height="26" />
    <rect x="0" y="270" rx="0" ry="0" width="280" height="32" />
    <rect x="285" y="270" rx="0" ry="0" width="35" height="31" />
    <rect x="0" y="310" rx="0" ry="0" width="320" height="98" />
  </ContentLoader>
);

export default SkeletonDescribe;
