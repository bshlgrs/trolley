var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;

var Nav = React.createClass({
  handleUserMenuSelect(e) {
    if (e == "sign-out") {
      $.ajax({
        type: "DELETE",
        url: "/users/sign_out",
        success: function(msg) {
            window.location = "/";
        }
      });
      return;
    }

    window.location = {
      "profile": "/users/profile",
      "settings": "/users/settings",
      "help": "/help"
    }[e]
  },
  render() {
    return (<nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">EA Cupid</a>
          <ul className="nav navbar-nav">
            <li><a href="/users/matches">Browse Matches</a></li>
            <li><a href="/questions">Answer trolley problems!</a></li>
          </ul>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/users/visitors"><i className="fa fa-users" aria-hidden="true"></i></a></li>
            <li><a href="/users/stars"><i className="fa fa-star" aria-hidden="true"></i></a></li>
            <li><a href="/users/messages"><i className="fa fa-comments" aria-hidden="true"></i></a></li>
            <li>
              <DropdownButton
                bsStyle="default"
                title={"Hello, "+this.props.user.email}
                id="user-menu"
                style={{marginRight: "5px", marginTop: "5px"}}
                onSelect={this.handleUserMenuSelect}>
                <MenuItem eventKey="profile">Profile</MenuItem>
                <MenuItem eventKey="settings">Settings</MenuItem>
                <MenuItem eventKey="help">Help</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="sign-out">Sign out</MenuItem>
              </DropdownButton>
            </li>
          </ul>
          {false && <form className="navbar-form navbar-right">
            <input type="text" className="form-control" placeholder="Search..."/>
          </form>}
        </div>
      </div>
    </nav>);
  }
})
