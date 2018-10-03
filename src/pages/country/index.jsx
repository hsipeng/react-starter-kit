import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCountry } from "@/redux/actions/country";
import { Loading } from "@/components/loading";

const m = ({ country }) => ({ country });
// eslint-disable-next-line
@connect(m, { fetchCountry })
export default class Country extends Component {
  static fetching({ dispatch, path }) {
    return [dispatch(fetchCountry(path.substr(1)))];
  }
  componentDidMount() {
    this.props.fetchCountry(this.props.match.params.name);
  }

  render() {
    const {
      country: {
        isFetching,
        flag,
        name,
        nativeName,
        capital,
        region,
        population,
        languages
      }
    } = this.props;

    if (isFetching) {
      return <Loading />;
    }

    return (
      <div className="container">
        <div className="country-container">
          <img src={flag} alt="" />
          <div className="country-data">
            <div className="country-data-item">
              <span>Name: </span>
              <span>{name}</span>
            </div>
            <div className="country-data-item">
              <span>NativeName: </span>
              <span>{nativeName}</span>
            </div>
            <div className="country-data-item">
              <span>Capital: </span>
              <span>{capital}</span>
            </div>
            <div className="country-data-item">
              <span>Region: </span>
              <span>{region}</span>
            </div>

            <div className="country-data-item">
              <span>Population: </span>
              <span>{population}</span>
            </div>
          </div>
          <hr />

          <div className="languages-container">
            {languages.map((item, i) => <span key={i}>{item.name}</span>)}
          </div>
        </div>
      </div>
    );
  }
}
