import Lottie from 'lottie-react';
import Camera from 'assets/animations/camera.json';
import Dress from 'assets/animations/dress.json';
import Gift from 'assets/animations/gift.json';
import HeartLoading from 'assets/animations/heart_loading.json'
import Heart from 'assets/animations/heart.json';
import Instagram from 'assets/animations/instagram.json';
import Music from 'assets/animations/music.json';
import Party from 'assets/animations/party.json';
import PlayMusic from 'assets/animations/play_music.json';
import Tasks from 'assets/animations/tasks.json';


export default function AnimationIcon({ lottieRef, variant="camera", className }) {
  const animFiles = {
    camera: Camera,
    dress: Dress,
    gift: Gift,
    heart_loading: HeartLoading,
    heart: Heart,
    instagram: Instagram,
    music: Music,
    party: Party,
    play_music: PlayMusic,
    tasks: Tasks
  };

  return (
    <Lottie
      className={className}
      animationData={animFiles[variant]}
      lottieRef={lottieRef}
    />
  );
}
