import React from 'react';
import axios from 'axios';

var withInteractionsApi = function (WrappedComponent, widget) {

  return class extends React.Component {
    constructor(props) {
      super(props);
      this.sendInteraction = this.sendInteraction.bind(this);
      this.formatBody = this.formatBody.bind(this);
    }

    formatBody(method, apiRoute, params = {}, data = {}) {
      let bodyObj = {
        method: method,
        url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp${apiRoute}`,
        data: data,
        params: params,
        headers: { Authorization: '' },
      };

      return bodyObj;
    }

    sendInteraction(element) {
      // const data = {
      //   element: element,
      //   widget: widget,
      //   time: new Date().toString()
      // };

      // const body = this.formatBody(null, null, null, data);
      // axios.post('/api/interactions', body.data)
      //   .then((response) => {
      //     console.log('Sent interaction data successfully ', response);
      //   })
      //   .catch((err) => {
      //     console.log('Error happened while sending interactions data');
      //   });
    }

    render() {
      return (
        <WrappedComponent sendInteraction={this.sendInteraction} {...this.props} />
      );
    }

  };

};

export default withInteractionsApi;