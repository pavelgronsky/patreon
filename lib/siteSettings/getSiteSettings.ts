import {sanityFetch} from '@/sanity/lib/live'
import {defineQuery} from 'next-sanity'

const siteSettingQuery = defineQuery(`*[_type == "siteSettings"][0]{
  ...,
  mainHeroImage{
  ...,
  asset->{
    _id,
    url
    }
  },
}`)

export const getSiteSettings = async () => {
    const {data} = await sanityFetch({
        query: siteSettingQuery,
    })

    return data
}
