import {createClient} from "next-sanity";  
//import {createCurrentUserHook} from "@sanity/client"
import createImageUrlBuilder from "@sanity/image-url"

export const config = ({
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: '2023-06-26',
    useCdn: false, 
    resultSourceMap: true, 

    useCode: process.env.NODE_ENV === "production",
});

export const sanityClient = createClient(config);

export const urlFor = (source)=> createImageUrlBuilder(config).image(source);

//export const useCurrentUser = createCurrentUserHook(config);