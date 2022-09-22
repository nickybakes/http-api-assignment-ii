const respondJSON = (request, response, status, object) => {

  response.writeHead(status, { 'Content-Type': 'application/json' });
  // gotta stringify to get it to just text (which we can actually send)
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  // gotta stringify to get it to just text (which we can actually send)
  response.end();
};

// get user object
// should calculate a 200
const getUsers = (request, response) => {
  //json object to send
  const responseJSON = {
    users,
  };

  //return 200 with message
  return respondJSON(request, response, 200, responseJSON);
};

// get meta info about user object
// should calculate a 200 
const getUsersMeta = (request, response) => {
  //return 200 without message, just the meta data
  return respondJSONMeta(request, response, 200);
};

const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  respondJSON(request, response, 404, responseJSON);
};

// exports to set functions to public.
// In this syntax, you can do getIndex:getIndex, but if they
// are the same name, you can short handle to just getIndex,
module.exports = {
  getUsers,
  getUsersMeta,

  notFound,
};
