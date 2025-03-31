import s from './styles.module.scss';

const VideoBackground = ({ media }) => {
  return (
    media && (
      <video
        className={s.heroVideo}
        autoPlay
        loop
        muted
        playsInline
        loading="lazy"
      >
        <source
          // src={media}
          src="/images/all/19daada027c0c63a3f8c62ca75cda11e0fb0e114_nopazq-2.mp4"
          type="video/mp4"
        />
      </video>
    )
  );
};

export default VideoBackground;
