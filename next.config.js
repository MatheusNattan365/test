module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mobile/login", // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
  future: {
    webpack5: true,
  },
};
