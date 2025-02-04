import s from './ImageContainer.module.scss';

const ImageContainer = ({ className = '', children, ...props }) => {
  const imgContClass = `${s.imageContainer} ${className}`;
  return (
    <div className={imgContClass} {...props}>
      {children}
    </div>
  );
};

export default ImageContainer;
