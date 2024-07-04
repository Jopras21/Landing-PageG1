import './button.css';
import {Text} from '../text/Text';

type Props = {
  type?: 'primary' | 'secondary';
  onClick?: () => void;
  title: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Button(props: Props) {
  const {type, title, className, style, onClick} = props;

  return (
    <button
      type="button"
      className={type === 'primary' ? 'primary-button' : 'secondary-button'}
      style={style}
    >
      <div className="button-animation email-icon"></div>
      <Text size="normal" title={title} style={{fontSize: '1rem'}} />
    </button>
  );
}
