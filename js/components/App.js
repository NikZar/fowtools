import 'babel/polyfill';

class Header extends React.Component {
  render() {
    return (
      <div>
        Header
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        Slider
      </div>
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <div>
        Menu
      </div>
    );
  }
}

class CardFilters extends React.Component {
  render() {
    return (
      <div>
        CardFilters
      </div>
    );
  }
}

class CardList extends React.Component {
  render() {
    return (
      <div>
        CardList
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Slider></Slider>
        <Menu></Menu>
        <CardFilters></CardFilters>
        <CardList></CardList>
        <h1>Widget list</h1>
        <ul>
          {this.props.viewer.widgets.edges.map(edge =>
            <li>{edge.node.name} (ID: {edge.node.id})</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        widgets(first: 10) {
          edges {
            node {
              id,
              name,
            },
          },
        },
      }
    `,
  },
});
