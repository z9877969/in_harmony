const Icon = ({ iconName = '', className = '' }) => {
  return (
    <svg className={className}>
      <use href={`/icons/sprite.svg#${iconName}`}></use>
    </svg>
  );
};

export default Icon;
