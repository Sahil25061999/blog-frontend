import { Heading1, Heading2, Layout, TextRegular } from "../components";

export function Blog() {
  return (
    <Layout>
      <div className=" w-full grid grid-cols-1 sm:grid-cols-12 gap-6">
        <div className=" col-span-8">
          <Heading1>How to sing the letters song?</Heading1>
          <p className=" text-sm text-stone-700 mt-4">
            {" "}
            Published on August 24, 2013
          </p>
          <div className=" mt-8">
            <TextRegular>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum hic
              totam ea fugit voluptates laborum cupiditate velit porro nesciunt
              veniam, doloribus vel itaque exercitationem facilis dicta fuga,
              nihil inventore perspiciatis molestiae id ut corrupti placeat
              incidunt ex! Officia earum neque eaque dicta! Iusto maiores nihil
              reprehenderit fuga mollitia enim. Perferendis ullam dignissimos,
              animi, recusandae
            </TextRegular>
            <TextRegular>
              reiciendis molestias nostrum tenetur aspernatur tempora iste
              dolores repellat officia temporibus voluptate. Expedita inventore
              autem labore quisquam animi tempora in, adipisci molestiae illo
              itaque consectetur. Soluta nemo expedita debitis corporis atque.
              Iste fuga cum consequatur, quia commodi eos quo ut placeat laborum
              cupiditate. Ipsa
            </TextRegular>
          </div>
        </div>
        <div className=" col-span-4 justify-self-center pl-4 border-l border-lime-400">
          <div className=" ">
            <p className="  text-stone-600">Author</p>
            <div className=" mt-1">
              <Heading2>John Krasinski</Heading2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
