module.exports = {
  horizon_options: {
	  project_name: 'trolley_react_horizon',
    permissions: false,
    auto_create_collection: true,
    auto_create_index: true,
    auth: {
      token_secret:  'helloworld1'
  	}
  },

  facebook_oauth_options: {
    path: 'facebook',
    id: '1598048663825755',
    secret: 'e4bf0effff7997bcc1b8014d8bd52795',
  },

  port: process.env.APP_PORT || 8181
}
