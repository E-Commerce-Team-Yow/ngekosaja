import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Listing } from "./Entities/Listing";
import { Fasilitas_kos } from "./Entities/Fasilitas_kos";
import { Ketentuan_peraturan } from "./Entities/Ketentuan_peraturan";
import { Media } from "./Entities/Media";
import { Rumah_kos } from "./Entities/Rumah_kos";
import { User } from "./Entities/User";
import { Testimoni } from "./Entities/Testimoni";
import { Penyewaan } from "./Entities/Penyewaan";
import { Tagihan } from "./Entities/Tagihan";
import { Role } from "./Entities/Role";
import { Kota } from "./Entities/Kota";
import { Provinsi } from "./Entities/Provinsi";
import { truncate } from "fs/promises";

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "ngekosaja",
    username: "root",
    password: "",
    logging: true,
    synchronize: false,
    entities: [Listing, Fasilitas_kos, Ketentuan_peraturan, Media, 
      Rumah_kos, User, Testimoni, Penyewaan, Tagihan, Role, Kota, Provinsi],
  });

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err) => {
  console.log(err);
});
