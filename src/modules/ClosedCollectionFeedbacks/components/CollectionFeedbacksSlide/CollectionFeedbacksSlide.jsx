import { SwiperSlide } from 'swiper/react';
import CollectionFeedbacksCard from '../CollectionFeedbacksCard/CollectionFeedbacksCard';
import s from './CollectionFeedbacksSlide.module.scss';

const CollectionFeedbacksSlide = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <SwiperSlide key={comment._id} className={s.listItem}>
          <CollectionFeedbacksCard comment={comment} />
        </SwiperSlide>
      ))}
    </>
  );
};

export default CollectionFeedbacksSlide;
