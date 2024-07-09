import './visibilityProduct.css';
import {Text} from '@/app/core-ui/text/Text';

interface CardProps {
  imageSrc: string;
  subtitle: string;
}

const VisibilityCard: React.FC<CardProps> = ({imageSrc, subtitle}) => {
  return (
    <div className="visibility">
      <img src={imageSrc} alt="visibility" />
      <div className="visibility-overlay">
        <div className="visibility-text">
          <Text
            size="normal"
            title={subtitle}
          />
        </div>
      </div>
    </div>
  );
};

export default VisibilityCard;
