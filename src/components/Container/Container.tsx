import { Children, ReactNode } from 'react';
import scss from './Container.module.scss';
import { addCSSClass } from '../../assets/ts/functions';

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = props => {
  const { className, children } = props;

  addCSSClass(scss, 'container', ['angel', 'andreev', 'react']);

  return <div className={`${scss['container']} ${className}`.trim()}>{children}</div>;
};

export default Container;
