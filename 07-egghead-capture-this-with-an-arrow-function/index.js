// Part 1
const outerThis = this;

const func = () => {
    console.log(this === outerThis);
};

func();
func.call(null);
func.apply(undefined);
func.bind({})();

// Part 2
const counter = {
  count: 0,
  incrementPeriodically() {
      setInterval(() => {
          console.log(++this.count);
      }, 1000);
  }
};

counter.incrementPeriodically();