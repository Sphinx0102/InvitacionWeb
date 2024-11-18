import { ReactComponent as CircleCounter } from 'assets/vectors/circle_counter.svg';
import { ReactComponent as CurveFront } from 'assets/vectors/curve_front.svg';
import { ReactComponent as CurveFrontRotate } from 'assets/vectors/curve_front_rotate.svg';
import { ReactComponent as Lines01 } from 'assets/vectors/lines_01.svg';
import { ReactComponent as Lines02 } from 'assets/vectors/lines_02.svg';
import { ReactComponent as Quote } from 'assets/vectors/quote.svg';
import { ReactComponent as Waves01 } from 'assets/vectors/waves_01.svg';
import { ReactComponent as Waves02 } from 'assets/vectors/waves_02.svg';
import { ReactComponent as Waves03 } from 'assets/vectors/waves_03.svg';
import { ReactComponent as Waves04 } from 'assets/vectors/waves_04.svg';
import { ReactComponent as Waves05 } from 'assets/vectors/waves_05.svg';
import { ReactComponent as Tape } from 'assets/vectors/tape.svg';


export default function VectorImage({ variant="circle_counter", className }) {
  const vectorFiles = {
    circle_counter: CircleCounter,
    curve_front: CurveFront,
    curve_front_rotate: CurveFrontRotate,
    lines_01: Lines01,
    lines_02: Lines02,
    quote: Quote,
    waves_01: Waves01,
    waves_02: Waves02,
    waves_03: Waves03,
    waves_04: Waves04,
    waves_05: Waves05,
    tape: Tape
  };

  const VectorComponent = vectorFiles[variant];

  return (
    <VectorComponent className={className}/>
  );
}
