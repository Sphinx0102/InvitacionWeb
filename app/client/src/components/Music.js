import React, { useEffect, useState, useRef } from "react";
import { AnimationIcon } from 'components';


export default function Music({ isMusicOn, start }) {
  const lottieRef = useRef();
  const [player, setPlayer] = useState();
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    let tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.setAttribute("onload", "onYouTubeIframeReady()");
    let firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    tag.onload = setupPlayer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    lottieRef.current.stop();
    if (isMusicOn === true) {
      try {
        playVid();
      } catch (e) {
        console.error(e);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMusicOn]);

  function playVid() {
    player.playVideo();
    player.unMute();
    setIsMuted(false);
    start();
    lottieRef.current.play();
  };

  function unMuteVid() {
    player.unMute();
    setIsMuted(false);
    lottieRef.current.play();
  };

  function muteVid() {
    player.mute();
    setIsMuted(true);
    lottieRef.current.stop();
  };

  function handleOnClickButton() {
    if (!isMusicOn) {
      playVid();
      return;
    }

    if (isMuted) unMuteVid();
    else muteVid();
  };

  function setupPlayer() {
    window.YT.ready(function() {
      setPlayer(new window.YT.Player("video", {
        height: "0",
        width: "0",
        videoId: "yKNxeF4KMsY",
        loop: "1",
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      }));
    });
  }

  function onPlayerReady(event) {
    setPlayer(event.target);
  }

  function onPlayerStateChange(event) {
    // let videoStatus = Object.entries(window.YT.PlayerState);
    // console.info(videoStatuses.find(status => status[1] === event.data)[0]);
  }

  return (
    <>
      <div id="video" className="music-button__video" allow-presentation="true"></div>
      <div className="music-button">
        <button onClick={handleOnClickButton}>
          <AnimationIcon lottieRef={lottieRef} variant="play_music" className="music-button__icon"/>
        </button>
      </div>
    </>
  );
}
