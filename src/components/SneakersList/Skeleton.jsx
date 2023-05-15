import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="card"
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f7f7f7"
    foregroundColor="#f2f2f2"
    {...props}
  >
    <rect x="30" y="0" rx="10" ry="10" width="150" height="90" />
    <rect x="30" y="105" rx="3" ry="3" width="150" height="15" />
    <rect x="28" y="388" rx="8" ry="8" width="98" height="40" />
    <rect x="238" y="388" rx="8" ry="8" width="98" height="40" />
    <rect x="30" y="125" rx="3" ry="3" width="95" height="15" />
    <rect x="30" y="228" rx="8" ry="8" width="80" height="25" />
    <rect x="148" y="224" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
);

export default Skeleton;
