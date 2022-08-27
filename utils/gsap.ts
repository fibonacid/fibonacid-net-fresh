import _gsap from "gsap";
import _Flip from "gsap/Flip";

const gsap = _gsap as GSAP;

gsap.registerPlugin(_Flip);

export default gsap;
export const Flip = _Flip;
