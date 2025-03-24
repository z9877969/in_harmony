import s from './styles.module.scss';

const VideoBackground = ({ media }) => {
  return (
      media && (
        <video className={s.heroVideo} autoPlay loop muted playsInline>
          <source src={media} type="video/mp4" />
        </video>
      )
  );
};

export default VideoBackground;
