import s from './CollectionFeedbacksCard.module.scss';

const CollectionFeedbacksCard = ({ comment }) => {
  return (
    <div className={s.container}>
      <p className={s.commentText}>{`"${comment.comment}"`}</p>
      <div className={s.personContainer}>
        <p className={s.name}>
          {comment.name},
          <span>
            {comment.age} {comment.term}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CollectionFeedbacksCard;
