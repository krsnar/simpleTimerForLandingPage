 /**
  * @function timer
  * @description a simple timer for landing pages
  * param: HH hours
  * param: MM minutes
  * param: SS seconds
  * param: show call back. Will call every second with time string
  * param: done call back, optional. Will be called at end of timer
  */
function timer(HH=0, MM=0, SS=0, show, done) {
  let countdown = SS + MM*60 + HH*60*60;
  let interval = setInterval(() => {
    if(countdown === 0) {
      clearInterval(interval);
      if(done) {
        done();
      }
    }
    let totalSeconds = countdown;
    let hh = Math.floor(totalSeconds/3600);
    totalSeconds = totalSeconds % 3600;
    let mm = Math.floor(totalSeconds/60);
    totalSeconds = totalSeconds % 60;
    let ss = totalSeconds;
    show(`${hh} : ${mm} : ${ss}`);
    countdown --;
  }, 1000)
  return interval;
};

export default timer;