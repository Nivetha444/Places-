import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  // List of all states declared
  state = {
    places: [],
    isLoading: true,
    error: null,
  };

  // The getPlace function fetches the response of all Places under the URL
  getPlaces() {
    axios
      .get(
        "https://crosssolved.herokuapp.com/http://roadtrippers.herokuapp.com/api/v1/places/"
      )
      .then((response) => {
        console.log(response);
        this.setState({
          places: response.data.places,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  // This function helpes to mount the rendered function
  componentDidMount() {
    this.getPlaces();
  }

  renderTableData() {
    return this.state.places.map((place) => {
      const { id, location } = place;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{location}</td>
          <td>
            <a href={"/place/" + id}>Know More</a>
          </td>
        </tr>
      );
    });
  }

  render() {
    // /* when the isLoading is false, it returns the ID and places, else it shows loading */
    const { isLoading } = this.state;
    return (
      <div>
        <h2>List of All Places</h2>
        <div>
          {!isLoading ? (
            <table id="places">
              <tbody>
                <th>ID</th>
                <th>Location</th>
                <th>Places Details</th>
                {this.renderTableData()}
              </tbody>
            </table>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
}
export default App;
