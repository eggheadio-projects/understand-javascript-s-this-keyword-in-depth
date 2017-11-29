function func() {
  "use strict";
  console.log(this === undefined);
}

func();