const Video = () => {
  return (
    <section className="video">
      <div className="container">
        <a
          href="https://www.youtube.com/watch?v=MKM90u7pf3U&ab_channel=KanyeWest"
          data-youtubeLightbox=""
          className="video_link"
          target="_blank"
        >
          <img src="/img/video/play.svg" alt="" className="video_icon" />
          <img src="/img/video/video.jpg" alt="" className="video_img" />
        </a>
      </div>
    </section>
  );
};

export default Video;
