import React from "react";
import Title from "./Title";
import { useContext } from "react";
import { RoomContext } from "../context";

// get all unique value
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  //   console.log(context);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  //   get unique type
  let types = getUnique(rooms, "type");
  //   and all
  types = ["all", ...types];
  //   map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type  */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            id="type"
            name="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type  */}

        {/* guess type  */}
        <div className="form-group">
          <label htmlFor="capacity">Guest</label>
          <select
            id="capacity"
            name="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guess type  */}

        {/* room price  */}

        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            id="price"
            name="price"
            value={price}
            type="range"
            max={maxPrice}
            min={minPrice}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        {/* end of room price  */}

        {/* size  */}
        <div className="from-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            ></input>
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            ></input>
          </div>
        </div>
        {/* end od size  */}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            ></input>
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            ></input>
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* endof extras */}
      </form>
    </section>
  );
}

export default RoomFilter;
