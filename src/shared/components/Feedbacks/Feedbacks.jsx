import s from './Feedbacks.module.scss';
import { Button, Icon } from '../index.js';

const Feedbacks = ({ children }) => {
  return (
    <>
      <Button className={s.btnFeedbacks} size="withArrowSmall">
        <p>{children}</p>
        <Icon
          iconName="icon-arrow-right-circle"
          width="24"
          height="24"
          className={s.iconFeedbacks}
        />
      </Button>
    </>
  );
};

export default Feedbacks;
