import React, { Component, useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import axios from 'axios';



class Mapita extends Component {

    constructor(props) {
        super(props);
        this.state = {
          searchQuery: '',
          data: [],
        };
      }

    componentDidMount() {
        const getData = async () => {
          try {
            const respuesta = await axios.get(
              'http://localhost:5055/direcciones'
            );
            console.log("Data:", respuesta.data);
            this.setState({ data: respuesta.data});
           
          } catch (error) {
            console.error("Error al obtener datos de la API:", error);
            
          }
        };
        getData();
      };

      handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
      };

      filterData = () => {
        const { data, searchQuery } = this.state;
        // Filter data based on the searchQuery
        return data.filter(item => {
          // Modify this logic according to your data structure
          // Here, I assume each object has a 'name' property
          return item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.category.toLowerCase().includes(searchQuery.toLowerCase());
        });
      };

  render() {
    const filteredData = this.filterData();

    return (
        <div style={{width: '100vw', height: '95vh', position: 'relative'}}>
        <div style={{width: '100vw', height: '10%'}}>
        <input
          type="text"
          placeholder="Search for addresses..."
          value={this.state.searchQuery}
          onChange={this.handleSearchChange}
        />
            </div>
      <Map
      style={{width: '100%', height: '90%', bottom: 0}}
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 40.42267982375701,
          lng: -3.7269271950459526,  
        }}
      >
        {/* You can add markers or other map components here */}
        {filteredData.map((item, index) => (
            <Marker
              key={index}
              position={{ lat: item.latitud, lng: item.altitud }}
              icon={{
                url: 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1700438023/veterinario_2x_qwmlg4.png',
                anchor: new window.google.maps.Point(32, 32),
                scaledSize: new window.google.maps.Size(45, 45),
              }}
              // Add other marker properties as needed
            />
          ))}
        
      </Map>
      </div>
    );
  }
}



export default GoogleApiWrapper({
  apiKey: 'AIzaSyBG_PiZk8j38VoQK2OCB0w5frnL7sWw3p8', 
})(Mapita);