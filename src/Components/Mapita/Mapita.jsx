import React, { Component, useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import axios from 'axios';
import './_mapita.scss';



class Mapita extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            data: [],
            activeMarker: null,
            selectedPlace: null,
            isFilterOpen: false,
        };
    }

    componentDidMount() {
        
        this.getData();
    };

   getData = async () => {
        try {
            const respuesta = await axios.get(
                'http://localhost:5055/direcciones'
            );
            console.log("Data:", respuesta.data);
            this.setState({ data: respuesta.data });

        } catch (error) {
            console.error("Error al obtener datos de la API:", error);

        }
    };

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    
    onMarkerClick = (props, marker, item) => {
        this.setState({
            activeMarker: marker, 
            selectedPlace: item,
        });
       
    };

    toggleFilter = () => {
        this.setState((prevState) => ({isFilterOpen: !prevState.isFilterOpen}));
    }

    filterByCategory = async (category) => {
        try {
            const respuesta = await axios.get(`http://localhost:5055/direcciones/getByCategory/${category}`);
            console.log(`Data for category ${category}:`, respuesta.data);
            this.setState({ data: respuesta.data, isFilterOpen: false });
        } catch (error) {
            console.error("Error al obtener datos de la API por categoría:", error);
        }
    };

    clearFilters = () => {
        this.getData();
        this.setState({ isFilterOpen: false });
    };
    

    render() {
        const { activeMarker, selectedPlace, searchQuery, data, isFilterOpen } = this.state;
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()));

            console.log('selected place:', selectedPlace) 
            console.log('marker:', activeMarker)

        return (
            <div className='map-container'>
                <div>
                    <div className='filter-icon' >
                    <input
                        type="text"
                        placeholder="Search for addresses..."
                        value={this.state.searchQuery}
                        onChange={this.handleSearchChange}
                        className='search-bar'
                    />
                    
                        <img className="filtritosmapa" onClick={this.toggleFilter} src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700701997/filtros_pu0gr1.png' alt='filter' />
                    </div>
                </div>
                {isFilterOpen && (
                    <div className='filter-options'>
                        <div className='close-filter' onClick={this.clearFilters}>
                            <span className='Xcerrar'>&times;</span>
                        </div>
                        <button onClick={() => this.filterByCategory('peluquería')} className='botofiltro'>
                        <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700437234/peluqueria_2x_bh1gng.png' alt='icon' />
                        </button>
                        <button onClick={() => this.filterByCategory('pet friendly')} className='botofiltro'>
                        <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700437277/cafe_2x_jsw93u.png' alt='icon' />
                        </button>
                        <button onClick={() => this.filterByCategory('veterinario')} className='botofiltro'>
                        <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700437299/veterinario_2x_ngbbhz.png' alt='icon' />
                        </button>
                        <button onClick={() => this.filterByCategory('tienda')} className='botofiltro'>
                        <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700437326/tienda_2x_tfquh0.png' alt='icon' />
                        </button>
                        <button onClick={() => this.filterByCategory('educación')} className='botofiltro'>
                        <img src='https://res.cloudinary.com/dizd9f3ky/image/upload/v1700437364/educacion_2x_olkjgm.png' alt='icon' />
                        </button>
                        <button onClick={() => this.filterByCategory('guardería')} className='botofiltro'>
                        <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700702591/guarderia_2x_yeyeiz.png' alt='icon' />
                        </button>
                    </div>
                )}
                <Map
                    className='map'
                    style={{ width: '100%', height: '90%', bottom: 0 }}
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
                            onClick={(props, marker) => this.onMarkerClick(props, marker, item)}
                            icon={{
                                url: 'https://res.cloudinary.com/dizd9f3ky/image/upload/v1700438023/veterinario_2x_qwmlg4.png',
                                anchor: new window.google.maps.Point(32, 32),
                                scaledSize: new window.google.maps.Size(45, 45),
                            }}
                        // Add other marker properties as needed
                        />
                    ))}
                    <InfoWindow
                        marker={activeMarker}
                        visible={!!activeMarker}
                        onClose={() => this.setState({ activeMarker: null, selectedPlace: null })}
                        
                    >
                        {selectedPlace && (
                        <div className='PlaceInfoCard'>
                            <h3 className='PlaceInfoName'>{selectedPlace.name}</h3>
                            <div className='InfoDivOne'>
                            <img src={selectedPlace.image} className='PlaceInfoImg' alt="fachada"></img>
                            <div className='NextToPic'>
                            <h3 className='PlaceInfoName'>Puntuación</h3>
                            <div className='ScoreDiv'>
                            <h4 className='PlaceInfoScore'>{selectedPlace.score}</h4>
                            
                            {selectedPlace.score < 2 ? (
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                            ) : selectedPlace.score > 2 && selectedPlace.score < 3 ? (<div>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                </div>
                            ) : selectedPlace.score > 3 && selectedPlace.score < 4 ? (
                                <div>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                </div>
                            ) : selectedPlace.score > 4 && selectedPlace.score < 5 ?(
                                <div>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                </div>
                            ) : selectedPlace >= 5 ? (
                                <div>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                <img src='https://res.cloudinary.com/dvmkyxyc0/image/upload/v1700700118/patitas_mhload.png'/>
                                </div>
                            ): ''}
                            
                            </div>
                            <p>{selectedPlace.address}</p>
                            </div>
                            </div>
                        </div>
                        )}
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}



export default GoogleApiWrapper({
    apiKey: 'AIzaSyBG_PiZk8j38VoQK2OCB0w5frnL7sWw3p8',
})(Mapita);