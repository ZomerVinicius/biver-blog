module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env(
          "DATABASE_HOST",
          "ec2-34-234-228-127.compute-1.amazonaws.com"
        ),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "dajk5v7ngo82nv"),
        username: env("DATABASE_USERNAME", "vuzitkrrmjqlgv"),
        password: env(
          "DATABASE_PASSWORD",
          "dc59b16dedb3a1eef84d4999a0be041bd419c474cd4a0973efc7c9339afb4baf"
        ),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
//local
// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'biver_blog'),
//         username: env('DATABASE_USERNAME', 'postgres'),
//         password: env('DATABASE_PASSWORD', 'postgres'),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//       options: {}
//     },
//   },
// });
