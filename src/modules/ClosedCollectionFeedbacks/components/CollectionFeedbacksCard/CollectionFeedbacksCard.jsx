import s from './CollectionFeedbacksCard.module.scss';

const CollectionFeedbacksCard = ({ comment }) => {
  return (
    <div className={s.container}>
      <p className={s.commentText}>{comment.comment}</p>
      <div className={s.personContainer}>
        <p className={s.name}>{comment.name}</p>
        <p className={s.role}>
          {comment.role}, {comment.age}
        </p>
      </div>
    </div>
  );
};

export default CollectionFeedbacksCard;
