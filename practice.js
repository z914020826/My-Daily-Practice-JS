var name = "outer";
function K() {
  let name = "k";
  let innerobj = {
    print: function () {
      console.log(name);
      console.log(this.name);
    },
  };
  innerobj.print();
  return innerobj;
}
let o = K();
o.print();
let p = o.print;
p();
