import React from 'react';
// import './App.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class MapContainer extends React.Component {

    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},
        data: []
    }

    infoWindowHendler = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
    };

    

    

    displayMarkers = () => {
        return this.state.data.map((data, index) => {
            //console.log(this.state.selectedPlace)
            return <Marker
                // key={data.id}
               
                // eventObj={data}
                // position={{
                //     lat: data.location_lat,
                //     lng: data.location_long,
                // }}
                // onClick={this.infoWindowHendler}
                
               
            />
        })
    }

    render() {
        return (
            <div style={{
                position: "relative",
                border: "1px solid white",
                overflow: "hidden",
                borderRadius: "10px",
                width: "100%",
                height: "90vh"
            }}>
                <Map
                    google={this.props.google}
                    zoom={7}
                    initialCenter={{ lat: 38.8610, lng: 71.2761 }}
                    onClick={this.onClose}
                    onDragend={this.onClose}
                >
                    {this.displayMarkers()}
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}
                        option={{ boxStyle: { width: '100px' } }}
                       
                    >
                        
                          
                              
                       
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);
