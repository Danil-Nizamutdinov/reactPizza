/* eslint-disable react/prop-types */
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function AddressSelector(props) {
  const {
    coords,
    placeHolder,
    handleMapClick,
    handleLocalityChange,
    handleStreetChange,
    handleHouseChange,
    handleFlatChange,
    changeDropDownToggler,
    handleOrder,
    address,
    dropDownToggler,
    city,
  } = props;

  return (
    <div className="map">
      <div className="map_title">
        <h1>Выберите место доставки</h1>
      </div>
      <YMaps>
        <Map
          width="100%"
          height="400px"
          defaultState={{ center: coords, zoom: 12 }}
          onClick={handleMapClick}
        >
          <Placemark geometry={coords} options={{ draggable: true }} />
        </Map>
      </YMaps>
      <div className="map_address_box">
        <form action="">
          <div className="map_address_content">
            <div className="map_adress_locality_select">
              <button
                className={`locality_conent_bars ${
                  dropDownToggler ? "locality_conent_bars_active" : ""
                }`}
                onClick={changeDropDownToggler}
              >
                {address.locality}
              </button>
              <ul
                className={`locality_content_dropdown ${
                  dropDownToggler ? "locality_content_dropdown_active" : ""
                }`}
                onClick={changeDropDownToggler}
              >
                {city.map((c, index) => {
                  return (
                    <li
                      key={index}
                      className="locality_content_dropdown_item"
                      onClick={() => handleLocalityChange(index)}
                    >
                      {c}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="map_address_content">
            <div>
              <label htmlFor="input">Улица:</label>
              <input
                type="text"
                name="text"
                className="map_address"
                placeholder={placeHolder}
                onChange={handleStreetChange}
                value={address.street || ""}
              />
            </div>
          </div>
          <div className="map_address_content">
            <div>
              <label htmlFor="input">Дом:</label>
              <input
                type="text"
                name="text"
                onChange={handleHouseChange}
                value={address.house || ""}
                placeholder={placeHolder}
                className="map_address_house_kv map_address"
              />
            </div>
            <div>
              <label htmlFor="input">Кв:</label>
              <input
                type="text"
                className="map_address_house_kv map_address"
                onChange={handleFlatChange}
                value={address.flat || ""}
                placeholder={placeHolder}
              />
            </div>
          </div>
          <div className="map_address_content">
            <button onClick={handleOrder}>Далее</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressSelector;
