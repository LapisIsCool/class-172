AFRAME.registerComponent("markerhandler", {
  init: async function () {
    this.el.addEventListener("markerFound", () => {
      this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost", () => {
      this.handleMarkerLost();
    });
  },

  handleMarkerFound: function () {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";
    var ratingButton = document.getElementById("rating-button");
    var orderButton = document.getElementById("order-button");
    var orderSummaryButton = document.getElementById("order-summary-button");

    ratingButton.addEventListener("click", () => {
      swal({
        icon: "warning",
        title: "rate dish",
        text: "work in progress",
      });
    });

    orderButton.addEventListener("click", () => {
      swal({
        icon: "https://i.imgur.com/4NZ6uLY.jpg",
        title: "thanks for order",
        text: "you will recive your order soon",
        timer: 2000,
        buttons: false,
      });
    });

    orderSummaryButton.addEventListener("click", () => {
      this.handleOrderSummary();
    });
  },

  getOrderSummary: async function (tNumber) {
    return await firebase
      .firestore()
      .collection("tables")
      .doc(tNumber)
      .get()
      .then((doc) => doc.data());
  },

  handleOrderSummary: async function () {
    var tNumber;
    tableNumber <= 9 ? (tNumber = `T0${tableNumber}`) : `T${tableNumber}`;
    firebase
      .firestore()
      .collection("tables")
      .doc(tNumber)
      .update({
        current_orders: {},
        total_bill: 0,
      })
      .then(() => {
        swal({
          icon: "success",
          title: "thanks for paying",
          text: "we hope you enjoy the food",
          timer: 3000,
          buttons: false,
        });
      });
  },

  handleMarkerLost: function () {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  },
});
