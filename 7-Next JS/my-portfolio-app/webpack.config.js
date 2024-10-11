module.exports = {
  module: {
    rules: [
      {
        test: /\.(pdf|png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
