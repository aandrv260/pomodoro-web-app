import Card from '../Card/Card';
import Timer from '../Timer/Timer';

type MainContentProps = {
  //   children: React.ReactNode;
};

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <main id="main">
      <Card>
        <Timer />
      </Card>
    </main>
  );
};

export default MainContent;
