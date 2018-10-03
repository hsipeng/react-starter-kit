import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCountries } from "@/redux/actions/countries";
import { Loading } from "@/components/loading";
import CountriesItem from "./modules/CountriesItem";

const m = ({ countries }) => ({ countries });

// eslint-disable-next-line 
@connect(m, { fetchCountries })
export default class Countries extends Component {
  static fetching({ dispatch }) {
    return [dispatch(fetchCountries())];
  }

  componentDidMount() {
    this.props.fetchCountries();
  }

  render() {
    const {
      countries: { isFetching, data }
    } = this.props;

    if (isFetching) {
      return <Loading />;
    }

    return (
      <div className="container">
        <div className="countries-container">
          {data.map((item, i) => <CountriesItem key={i} {...item} />)}
        </div>
      </div>
    );
  }
}
