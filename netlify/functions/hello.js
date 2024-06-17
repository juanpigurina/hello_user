exports.handler = async (event) => {
  try {
    const { name } = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello, ${name}!` }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
exports.handler = async (event) => {
  try {
    const { name } = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello, ${name}!` }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
};
