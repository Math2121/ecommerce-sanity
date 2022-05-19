import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

/**
 *  *para poder se comunicar com o CMS
 * */
export const client = sanityClient({
  projectId: "8ekguhxj",
  dataset: "production",
  apiVersion: "2022-05-19",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
/**
 * 
 ** Retorna a url da Imagem do CMS
 * @returns 
 */
export const urlFor = (source:any) => builder.image(source);
