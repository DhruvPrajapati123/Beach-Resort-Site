import React, { Component } from "react";
import items from "./data";
import Client from "./Contentfull";

Client.getEntries({
  // content_type: "beatchResportRoom",
}).then((response) => console.log(response.items));

const RoomContext = React.createContext();
//Provider and consumer

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  //getData

  // getData = async () => {
  //     try {
  //       let response = await Client.getEntries();
  //       let rooms = this.formateData(response.items);
  //       // console.log(rooms);
  //       let featuredRooms = rooms.filter((room) => room.featured === true);
  //       let maxPrice = Math.max(...rooms.map((room) => room.price));
  //       let maxSize = Math.max(...rooms.map((room) => room.size));
  //       this.setState({
  //         rooms,
  //         featuredRooms,
  //         sortedRooms: rooms,
  //         loading: false,
  //         price: maxPrice,
  //         maxPrice,
  //         maxSize,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  componentDidMount() {
    // this.getData
    let rooms = this.formateData(items);
    // console.log(rooms);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((room) => room.price));
    let maxSize = Math.max(...rooms.map((room) => room.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  formateData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    // console.log(type, name, value);
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    // console.log("Hello");
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
      this.state;
    // all the rooms
    let tempRooms = [...rooms];

    capacity = parseInt(capacity);

    price = parseInt(price);

    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type == type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    //filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    // change state
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
