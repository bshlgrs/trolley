var App = React.createClass({
  render() {
    return (<div>
      <Nav {...this.props} />

      <div className="container">
        <div className="row" style={{marginTop: "15px"}}>
          <div className="col-sm-10 col-sm-offset-1">
            Hello, {this.props.user.email}
          </div>
        </div>
      </div>
    </div>);
  }
})
