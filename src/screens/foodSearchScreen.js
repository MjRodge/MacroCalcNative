import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';

import { foodSearchAutoComplete } from '../actions';

class FoodSearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Food Search'
  };
  state = {
    search: ''
  };

  updateSearch = search => {
    this.setState({ search });
    this.props.foodSearchAutoComplete(search);
  };

  render() {
    const { search } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          lightTheme
          round
        />
        <Text>{this.props.searchQuery}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { searchQuery } = state.food;
  return {
    searchQuery
  };
};

export default connect(
  mapStateToProps,
  { foodSearchAutoComplete }
)(FoodSearchScreen);
