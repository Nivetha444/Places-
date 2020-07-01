import React from "react";
import axios from "axios";

class UserId extends React.Component {
  // List of all states declared
  state = {
    placesId: [],
    isLoading: true,
    error: null,
  };

  // The getPlacesId function fetches the response of particular Id under the URL
  getPlacesId() {
    axios
      .get(
        `https://crosssolved.herokuapp.com/http://roadtrippers.herokuapp.com/api/v1/place/${this.props.match.params.id}`
      )
      .then((response) => {
        console.log(response);
        this.setState({
          placesId: response.data,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  // This function helpes to mount the rendered function
  componentDidMount() {
    this.getPlacesId();
  }

  render() {
    const { isLoading, placesId, error } = this.state;
    return (
      <div>
        <React.Fragment>
          <h2>Place Details</h2>
          <div>
            {/* when the isLoading is false, it returns the Details, else it shows loading */}
            {!isLoading ? (
              placesId.map((place) => {
                const {
                  id,
                  name,
                  type,
                  cover,
                  official_description,
                  location,
                  latitude,
                  longitude,
                  pincode,
                } = place;
                return (
                  <div key={id}>
                    <div className="image">
                      <img src={cover} alt={name} />
                    </div>
                    <div className="Details">
                      <p>
                        <b>ID: </b>
                        {id}
                      </p>
                      <p>
                        <b>NAME: </b>
                        {name}
                      </p>
                      <p>
                        <b>TYPE: </b>
                        {type}
                      </p>
                      <p>
                        <b>DESCRIPTION: </b>
                        {official_description}
                      </p>
                      <p>
                        <b>LOCATION: </b>
                        {location}
                      </p>
                      <p>
                        <b>LATITUDE: </b>
                        {latitude}
                      </p>
                      <p>
                        <b>LONGITUDE: </b>
                        {longitude}
                      </p>
                      <p>
                        <b>PINCODE: </b>
                        {pincode}
                      </p>
                    </div>

                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default UserId;
