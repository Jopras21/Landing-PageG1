import './text.css';

type Props = {
  size?: 'header' | 'normal' | 'small';
  title: string;
  className?: string;
  style?: React.CSSProperties;
};

export function Text(props: Props) {
  let {size = 'normal', title, className, style} = props;

  const baseClass =
    size === 'header'
      ? 'header-text'
      : size === 'normal'
      ? 'normal-text'
      : 'small-text';
  const combinedClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <span className={combinedClass} style={style}>
      {title}
    </span>
  );
}
