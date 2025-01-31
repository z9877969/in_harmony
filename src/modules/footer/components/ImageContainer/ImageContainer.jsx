import s from './ImageContainer.module.scss';

const ImageContainer = ({ src, className, children, ...props }) => {
  return (
    <div className={s.ImageContainer} {...props}>
      {}
    </div>
  );
};

export default ImageContainer;
