import io from 'socket.io-client';
import feathers from '@feathersjs/client';
import { API_ROOT } from 'configs/env-vars';
import socketio from '@feathersjs/socketio-client';
// import { userLogoutApi } from './services/users';
// http://localhost:7070/
const client = feathers();

const socket = io(API_ROOT, {
  transports: ['websocket'],
});
client.configure(
  socketio(socket, {
    timeout: 10000,
  })
);
client.configure(
  feathers.authentication({
    storage: window.localStorage,
  })
);
client.hooks({
  error(context) {
    // localStorage.clear();
    // emptyState();
    // window.location.pathname = '/sign-in';
    // console.log(
    //   `Error in '${context.path}' service method '${context.method}'`,
    //   context.error.stack
    // );
  },
});
client.authenticate().catch(async err => {
  // eslint-disable-next-line
  // console.log(err, '******************');
  // await client.logout();
  // window.localStorage.clear();
  // window.location.pathname = '/sign-in';
});
export default client;
