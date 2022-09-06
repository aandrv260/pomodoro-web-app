import { addCSSClass } from '../../assets/ts/functions';
import scss from './Timer.module.scss';

type TimerProps = {
  className?: string;
  duration?: number;
};

const Timer: React.FC<TimerProps> = ({ duration, className }) => {
  return <div className={addCSSClass(scss, 'timer')}></div>;
};

export default Timer;
