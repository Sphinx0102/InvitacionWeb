import FlowerGounter from 'assets/images/flower_counter.png';
import FlowerGroup01A from 'assets/images/flower_group01_A.png';
import FlowerGroup01B from 'assets/images/flower_group01_B.png';
import FlowerGroup01C from 'assets/images/flower_group01_C.png';
import FlowerGroup02A from 'assets/images/flower_group02_A.png';
import FlowerGroup02B from 'assets/images/flower_group02_B.png';
import FlowerGroup03A from 'assets/images/flower_group03_A.png';
import SkyStars from 'assets/images/ig.png';
import PhotoFront from 'assets/images/photo_front.jpg';
import Photo1 from 'assets/images/photo_1.jpg';
import Photo2 from 'assets/images/photo_2.jpg';
import Photo3 from 'assets/images/photo_3.jpg';
import Photo4 from 'assets/images/photo_4.jpg';
import Photo5 from 'assets/images/photo_5.jpg';
import Photo6 from 'assets/images/photo_6.jpg';


export default function Image({ variant="flower_counter", className }) {
  const imageFiles = {
    flower_counter: FlowerGounter,
    flower_group01_A: FlowerGroup01A,
    flower_group01_B: FlowerGroup01B,
    flower_group01_C: FlowerGroup01C,
    flower_group01_D: FlowerGroup01C,
    flower_group02_A: FlowerGroup02A,
    flower_group02_B: FlowerGroup01B,
    flower_group02_C: FlowerGroup02B,
    flower_group03_A: FlowerGroup03A,
    flower_group04_A: FlowerGroup03A,
    sky_stars: SkyStars,
    photo_front: PhotoFront,
    photo_1: Photo1,
    photo_2: Photo2,
    photo_3: Photo3,
    photo_4: Photo4,
    photo_5: Photo5,
    photo_6: Photo6
  };

  return (
    <img src={imageFiles[variant]} className={className} alt={`image_${variant}`} />
  );
}
