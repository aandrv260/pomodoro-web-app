import { ReactNode } from 'react';
import { addCSSClass, getValueOrDefault } from '../../assets/ts/functions';
import scss from './Card.module.scss';

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = props => {
  const { children } = props;
  const additionalClassNames = getValueOrDefault(props.className, '');
  const className = `${addCSSClass(scss, 'card', [additionalClassNames])}`;

  return <div className={className}>{children}</div>;
};

export default Card;
