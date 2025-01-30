import s from './CustomPagination.module.scss';

const CustomPagination = ({ totalSlides, currentSlide, goToSlide }) => {
  return (
    <div className={s.customPagination}>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <span
          key={index}
          className={`${s.paginationDot} ${currentSlide === index ? s.activeDot : ''}`}
          onClick={() => goToSlide(index)}
        />
      ))}
    </div>
  );
};
export default CustomPagination;
