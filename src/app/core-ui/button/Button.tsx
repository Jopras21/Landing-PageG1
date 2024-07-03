import './button.css';
import {Text} from '../text/Text.tsx';

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
      <div className="button-animation email-icon">&#9993;</div>
      <Text
        size="small"
        title={title}
        style={{marginLeft: '3.2rem', fontSize: '1rem'}}
      />
    </button>
  );
}
