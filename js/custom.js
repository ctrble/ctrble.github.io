inView.threshold(0.5);

inView('.visible')
     .on('enter', el => {
          el.classList.add("in-view");
     })
     .on('exit', el => {
          el.classList.remove("in-view");
     });

var nightMode = new NightMode({
     evening: new DayTime(22, 0), // or evening: DayTime.fromString('22:00')
     morning: new DayTime(6, 30), // or morning: DayTime.fromString('5:30')
     });
