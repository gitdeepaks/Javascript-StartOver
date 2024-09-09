// function getItem() {
//   console.log(this);
// }

// getItem();

const Item = {
  title: "Ball",
  getItem() {
    function sime() {
      console.log("this", this);
    }
    sime();
  },
};

const item = new Item();
item.getItem();
