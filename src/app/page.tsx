import { Botones } from "./components/botones";

import { Buscador } from "./components/buscador";

import { Categorias } from "./components/categorias";
import { Listado } from "./components/listado";
import { getCategorias, getAllPost } from "@/lib/queries";

export default async function Home() {
  const { posts } = await getAllPost();
  const categorias = await getCategorias()


  return (
    <div>

      <h1>
        home

      </h1>
      <Buscador></Buscador>
      <Botones></Botones>
      <h1>Categorias de wordpress</h1>
      <Categorias categorias={categorias}></Categorias>
      <Listado posts={posts} ></Listado>
    </div>
  );
}
