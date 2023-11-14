import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAddress } from "../../api/api";
import { getCity } from "../../redux/other-reducer";
import AddressSelector from "./Map";

const ContainerAddressSelector = () => {
  const [coords, setCoords] = useState([54.314192, 48.403132]);
  const [address, setAddress] = useState({
    country: "",
    locality: "выберите город",
    street: "",
    house: "",
    flat: "",
  });
  const [dropDownToggler, setDropDownToggler] = useState(false);
  const city = useSelector((state) => state.otherReducer.city);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const placeHolder = "выберите адресс на карте";

  const handleMapClick = (event) => {
    const clickedCoords = event.get("coords");
    setCoords(clickedCoords);

    const getNewAddress = async () => {
      try {
        const addressComponents = await getAddress(
          clickedCoords[1],
          clickedCoords[0]
        );

        const newAddress = {};

        addressComponents.forEach((component) => {
          switch (component.kind) {
            case "country":
              newAddress.country = component.name;
              break;
            case "locality":
              newAddress.locality = component.name;
              break;
            case "street":
              newAddress.street = component.name;
              break;
            case "house":
              newAddress.house = component.name;
              break;
            default:
              break;
          }
        });

        setAddress(newAddress);
      } catch (error) {
        setAddress("Unable to retrieve address");
      }
    };

    getNewAddress();
  };

  const handleLocalityChange = (index) => {
    const newLocality = city[index];
    const newAddress = { ...address, locality: newLocality };

    setAddress(newAddress);
  };
  const handleStreetChange = (event) => {
    const newStreet = event.target.value;
    const newAddress = { ...address, street: newStreet };

    setAddress(newAddress);
  };
  const handleHouseChange = (event) => {
    const newHouse = event.target.value;
    const newAddress = { ...address, house: newHouse };

    setAddress(newAddress);
  };
  const handleFlatChange = (event) => {
    const newFlat = event.target.value;
    const newAddress = { ...address, flat: newFlat };

    setAddress(newAddress);
  };
  const changeDropDownToggler = (e) => {
    e.preventDefault();
    setDropDownToggler(!dropDownToggler);
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (address.locality === "Ульяновск" || address.locality === "Москва") {
      navigate("/card");
    } else {
      alert("Мы не работаем в вашем городе");
    }
  };

  useEffect(() => {
    dispatch(getCity());
  }, []);

  return (
    <AddressSelector
      coords={coords}
      placeHolder={placeHolder}
      handleMapClick={handleMapClick}
      handleLocalityChange={handleLocalityChange}
      handleStreetChange={handleStreetChange}
      handleHouseChange={handleHouseChange}
      handleFlatChange={handleFlatChange}
      changeDropDownToggler={changeDropDownToggler}
      handleOrder={handleOrder}
      address={address}
      dropDownToggler={dropDownToggler}
      city={city}
    />
  );
};

export default ContainerAddressSelector;
