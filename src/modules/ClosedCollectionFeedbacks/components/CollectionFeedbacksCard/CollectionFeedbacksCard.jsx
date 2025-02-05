import s from './CollectionFeedbacksCard.module.scss';

const CollectionFeedbacksCard = ({ comment }) => {
  return (
    <>
      <p className={s.commentText}>{comment.comment}</p>
      <div className={s.personContainer}>
        <p className={s.name}>{comment.name}</p>
        <p className={s.role}>
          {comment.role}, {comment.age}
        </p>
      </div>
    </>
  );
};

export default CollectionFeedbacksCard;
