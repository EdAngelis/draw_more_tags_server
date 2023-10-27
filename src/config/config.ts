type Environments = {
  db_uri: string;
};

type Config = {
  development: Environments;
  production: Environments;
};

const config = {
  development: {
    db_uri:
      "mongodb://127.0.0.1:27017/local",
  },
  production: {
    db_uri: process.env.DB_URI as string,
  },
};

type ObjectIndex = keyof typeof config;

const mode: ObjectIndex =
  (process.env.NODE_ENV as ObjectIndex) || ("development" as ObjectIndex);

export default config[mode];
