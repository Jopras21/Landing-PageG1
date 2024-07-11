import './text.css';

type Props = {
  size?: 'header' | 'normal' | 'small';
  title: string;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  onClick?: () => void;
};

export function Text(props: Props) {
  let {size = 'normal', title, className, style, href} = props;

  const baseClass =
    size === 'header'
      ? 'header-text'
      : size === 'normal'
      ? 'normal-text'
      : 'small-text';
  const combinedClass = className ? `${baseClass} ${className}` : baseClass;

  return (
    <a href={href}>
      <span className={combinedClass} style={style} >
        {title}
      </span>
    </a>
  );
}
