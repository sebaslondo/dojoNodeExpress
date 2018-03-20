class People extends React.Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  render() {
    let { users } = this.state;
    console.log(users);
    this.state.users.map((user, i) => {
      console.log(user);
      return (
        <li key={i}>
          <span className={user.obj.available}></span>
          <span className="name">{user.obj.name}</span>
          <span className="rank">{user.obj.nickname}</span>
          <span className="dist">{Math.floor(user.dis / 1000)} km</span>
        </li>
      )
    });

    return (
      <div id="ninj-container">
        <form id="search" onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="">Enter your latitude</label>
          <input
            defaultValue="25"
            type="text"
            placeholder="latitude"
            ref={(input) => { this.lat = input; }}
            required/>

          <label htmlFor="">Enter your Longitude</label>
          <input
              defaultValue="-80"
              type="text"
              ref={(input) => { this.lng = input; }}
              placeholder="Longitude"
              required/>

          <input type="submit" value="Find a Person"/>
        </form>

        <ul>
          { users }
        </ul>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    var lng = this.lng.value;
    var lat = this.lat.value;

    fetch('/api/users?lng=' + lng + '&lat=' + lat)
      .then((data) => {
        console.log(data);
        return data.json()
      })
      .then( json => {
        this.setState({
          users: json
        });
      })
  }
}

ReactDOM.render(
  <People/>,
  document.getElementById('people')
);
