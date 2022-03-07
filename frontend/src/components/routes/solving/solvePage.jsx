import { Introduction } from './parts/introduction';
import { Notation } from './parts/notation';
import { WhiteCross } from './parts/whiteCross';
import { WhiteCorners } from './parts/whiteCorners';
import { SecondLayer } from './parts/secondLayer';
import { YellowCross } from './parts/yellowCross';
import { SwapYellowCorners } from './parts/swapYellowCorners';
import { RotateYellowCorners } from './parts/rotateYellowCorners';
import { Congratulations } from './parts/congratulations';

export const SolvePage = () => (
    <>
        <Introduction />
        <Notation />
        <WhiteCross />
        <WhiteCorners />
        <SecondLayer />
        <YellowCross />
        <SwapYellowCorners />
        <RotateYellowCorners />
        <Congratulations />
    </>
);