import React, { Component } from "react";
import { RoomContext } from "../context";
import Loding from "../components/Loading";
import Room from "../components/Room";
import Title from "./Title";

export default class FeaturedRoom extends Component {
  render() {
    let { loading, featuredRooms } = this.context;
    // console.log(featuredRooms);
    const rooms = featuredRooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loding /> : rooms}
        </div>
        {/* <Room /> */}
        {/* <Loding /> */}
      </section>
    );
  }
}
FeaturedRoom.contextType = RoomContext;
