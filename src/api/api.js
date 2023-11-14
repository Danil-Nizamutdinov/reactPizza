/* eslint-disable no-undef */
import axios from "axios";

const apiKey = process.env.REACT_APP_YANDEX_API_KEY;

const instans = axios.create({
  baseURL: "http://localhost:3001/",
});

export const getAddress = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${latitude},${longitude}`
    );
    const addressComponents =
      response.data.response.GeoObjectCollection.featureMember[0].GeoObject
        .metaDataProperty.GeocoderMetaData.Address.Components;

    return addressComponents;
  } catch (error) {
    console.log("Unable to retrieve address");
    return [];
  }
};

export const pizzaAPI = {
  async getPizzas() {
    try {
      const res = await instans.get("pizzas");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
  async getPizza(id = 1) {
    try {
      const res = await instans.get("pizzas", {
        params: {
          id,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const otherAPI = {
  async getSnacks() {
    try {
      const res = await instans.get("snacks");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
  async getDesserts() {
    try {
      const res = await instans.get("desserts");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
  async getDrinks() {
    try {
      const res = await instans.get("drinks");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
  async getCity() {
    try {
      const res = await instans.get("city");
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
};
