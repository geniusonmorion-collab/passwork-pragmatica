// Framework-free adaptation. Original: source/reference/0y14chldcipxr.js.
import {motion,withTempo} from './motion-tokens.js';
export function reveal(root=document) {
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');
  const observer=new IntersectionObserver(entries=>{
    for(const {target,isIntersecting} of entries){
      if(!isIntersecting)continue;
      target.animate([
        {opacity:0,transform:'translateY(16px)',filter:`blur(${motion.blurEntrance}px)`},
        {opacity:1,transform:'translateY(0)',filter:'blur(0px)'}
      ],{duration:reduce.matches?0:withTempo(motion.entrance),easing:motion.easeUI,fill:'both',delay:reduce.matches?0:Number(target.dataset.delay||0)});
      observer.unobserve(target);
    }
  },{threshold:.4});
  root.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));
  return ()=>observer.disconnect();
}
export function scrollToSection(id){
  document.getElementById(id)?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
}
